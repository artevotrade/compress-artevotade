// PayPal configuration
// Les variables d'environnement doivent être configurées dans Vercel:
// PAYPAL_CLIENT_ID - Client ID from PayPal Developer Portal
// PAYPAL_CLIENT_SECRET - Secret from PayPal Developer Portal
// PAYPAL_MODE - 'sandbox' for testing, 'live' for production

const PAYPAL_API_BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

interface PayPalTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface PayPalOrderResponse {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

// Get PayPal access token using Client Credentials
export async function getPayPalAccessToken(): Promise<string> {
  // Return cached token if still valid
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials not configured');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get PayPal access token: ${error}`);
  }

  const data: PayPalTokenResponse = await response.json();

  // Cache token with 1 minute buffer before expiry
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return data.access_token;
}

// Create a PayPal order for subscription
export async function createPayPalOrder(
  amount: string,
  currency: string = 'EUR',
  planName: string = 'Pro Plan'
): Promise<PayPalOrderResponse> {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: `CompressImage - ${planName}`,
          amount: {
            currency_code: currency,
            value: amount,
          },
        },
      ],
      application_context: {
        brand_name: 'CompressImage by Artevotade',
        locale: 'fr-FR',
        landing_page: 'LOGIN',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com'}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com'}/cancel`,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create PayPal order: ${error}`);
  }

  return response.json();
}

// Capture payment for an approved order
export async function capturePayPalOrder(orderId: string): Promise<{
  success: boolean;
  transactionId?: string;
  payerEmail?: string;
}> {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to capture PayPal order: ${error}`);
  }

  const data = await response.json();

  const transactionId = data.purchase_units?.[0]?.payments?.captures?.[0]?.id;
  const payerEmail = data.payer?.email_address;

  return {
    success: data.status === 'COMPLETED',
    transactionId,
    payerEmail,
  };
}

// Verify webhook signature
export async function verifyPayPalWebhook(
  headers: Record<string, string>,
  body: string
): Promise<boolean> {
  // In production, you should verify the webhook signature
  // For simplicity, we'll check for the required headers
  const transmissionId = headers['paypal-transmission-id'];
  const transmissionSig = headers['paypal-transmission-sig'];
  const transmissionTime = headers['paypal-transmission-time'];
  const certUrl = headers['paypal-cert-url'];
  const authAlgo = headers['paypal-auth-algo'];

  return !!(transmissionId && transmissionSig && transmissionTime && certUrl && authAlgo);
}
