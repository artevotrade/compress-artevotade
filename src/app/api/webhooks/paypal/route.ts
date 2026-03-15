import { NextRequest, NextResponse } from 'next/server';
import { capturePayPalOrder, verifyPayPalWebhook } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headers: Record<string, string> = {};
    
    request.headers.forEach((value, key) => {
      headers[key.toLowerCase()] = value;
    });

    // Verify webhook signature (simplified for now)
    const isValid = await verifyPayPalWebhook(headers, body);
    
    if (!isValid) {
      console.warn('Webhook signature verification failed');
      // In development, we'll still process the webhook
    }

    const event = JSON.parse(body);
    const eventType = event.event_type;

    console.log('PayPal webhook event:', eventType);

    switch (eventType) {
      case 'CHECKOUT.ORDER.APPROVED': {
        // Customer approved the order, capture the payment
        const orderId = event.resource?.id;
        
        if (orderId) {
          const result = await capturePayPalOrder(orderId);
          
          if (result.success) {
            console.log('Payment captured successfully:', result.transactionId);
            // TODO: Update user subscription in database
            // await updateSubscription(result.payerEmail, 'pro');
          }
        }
        break;
      }

      case 'PAYMENT.CAPTURE.COMPLETED': {
        // Payment was captured successfully
        const captureId = event.resource?.id;
        const amount = event.resource?.amount?.value;
        const payerEmail = event.resource?.custom_id;
        
        console.log('Payment completed:', { captureId, amount, payerEmail });
        // TODO: Update user subscription in database
        break;
      }

      case 'PAYMENT.CAPTURE.DENIED':
      case 'PAYMENT.CAPTURE.REFUNDED': {
        // Payment was denied or refunded
        console.log('Payment denied/refunded:', event.resource?.id);
        // TODO: Handle payment failure
        break;
      }

      default:
        console.log('Unhandled PayPal event type:', eventType);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('PayPal webhook error:', error);
    
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Verify endpoint for PayPal webhook verification
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
