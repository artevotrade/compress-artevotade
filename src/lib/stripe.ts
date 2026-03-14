import Stripe from 'stripe';

// Lazy-initialize Stripe to avoid build-time errors
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured');
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2024-11-20.acacia',
      typescript: true,
    });
  }
  return stripeInstance;
};

// For backward compatibility, export stripe as a getter
export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    return Reflect.get(getStripe(), prop);
  }
});

// Price IDs for the Pro plan
// In production, create these products in Stripe Dashboard
export const STRIPE_CONFIG = {
  proPlanPriceId: process.env.STRIPE_PRO_PRICE_ID || 'price_pro_monthly',
  successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com'}/cancel`,
};

// Pro plan details
export const PRO_PLAN = {
  name: 'Pro',
  price: 9,
  currency: 'eur',
  interval: 'month',
  features: [
    '100 images par compression',
    'Tous les formats supportés',
    'Qualité ajustable (50-100%)',
    'Historique de compression',
    'API REST illimitée',
    'Support prioritaire',
    'Sans watermark',
  ],
};
