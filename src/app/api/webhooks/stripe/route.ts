import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { db } from '@/lib/db';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Webhook secret from Stripe Dashboard
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  // Check if webhook secret is configured
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured');
    return NextResponse.json(
      { error: 'Webhook not configured' },
      { status: 500 }
    );
  }

  try {
    const stripe = getStripe();
    
    // Get raw body
    const body = await request.text();
    
    // Get signature from header
    const signature = request.headers.get('stripe-signature');
    
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerEmail = session.customer_email || session.customer_details?.email;
        const customerId = session.customer as string;
        const subscriptionId = session.subscription as string;
        
        if (customerEmail) {
          try {
            await db.user.upsert({
              where: { email: customerEmail },
              update: {
                stripeCustomerId: customerId,
                stripeSubscriptionId: subscriptionId,
                plan: 'pro',
              },
              create: {
                email: customerEmail,
                stripeCustomerId: customerId,
                stripeSubscriptionId: subscriptionId,
                plan: 'pro',
              },
            });
            console.log(`New Pro subscription: ${customerEmail}`);
          } catch (dbError) {
            console.error('Database error:', dbError);
          }
        }
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        try {
          const customer = await stripe.customers.retrieve(customerId);
          if ('email' in customer && customer.email) {
            const newPlan = subscription.status === 'active' ? 'pro' : 'free';
            await db.user.updateMany({
              where: { email: customer.email },
              data: { plan: newPlan, stripeSubscriptionId: subscription.id },
            });
          }
        } catch (err) {
          console.error('Error updating subscription:', err);
        }
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        try {
          const customer = await stripe.customers.retrieve(customerId);
          if ('email' in customer && customer.email) {
            await db.user.updateMany({
              where: { email: customer.email },
              data: { plan: 'free', stripeSubscriptionId: null },
            });
          }
        } catch (err) {
          console.error('Error deleting subscription:', err);
        }
        break;
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Payment succeeded: ${invoice.id}`);
        break;
      }
      
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log(`Payment failed: ${invoice.id}`);
        break;
      }
      
      default:
        console.log(`Unhandled event: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
