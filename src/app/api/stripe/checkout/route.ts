import { NextRequest, NextResponse } from 'next/server';
import { getStripe, STRIPE_CONFIG } from '@/lib/stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Pro plan configuration
const PRO_PLAN = {
  name: 'Pro',
  price: 9, // 9 EUR
  currency: 'eur',
  interval: 'month' as const,
};

// Check if Stripe is configured
const isStripeConfigured = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  return key && key.startsWith('sk_');
};

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json().catch(() => ({}));
    const { plan = 'pro', email } = body;

    // Validate plan
    if (plan !== 'pro') {
      return NextResponse.json(
        { error: 'Plan non valide' },
        { status: 400 }
      );
    }

    // Check if Stripe is properly configured
    if (!isStripeConfigured()) {
      // Demo mode - simulate successful checkout
      console.log('Stripe not configured - Demo mode');
      
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com';
      
      return NextResponse.json({
        success: true,
        demo: true,
        message: 'Mode démo - Stripe non configuré',
        checkoutUrl: `${baseUrl}/success?demo=true`,
        sessionId: `demo_session_${Date.now()}`,
      });
    }

    // Real Stripe checkout
    const stripe = getStripe();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://compress.artevotrade.com';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      
      // Customer email if provided
      customer_email: email || undefined,
      
      // Line items - Pro plan subscription
      line_items: [
        {
          price_data: {
            currency: PRO_PLAN.currency,
            product_data: {
              name: `CompressImage - Artevotrade - Abonnement ${PRO_PLAN.name}`,
              description: 'Compression d\'images illimitée - 100 images par lot',
            },
            unit_amount: PRO_PLAN.price * 100, // Convert to cents (900 = 9.00 EUR)
            recurring: {
              interval: PRO_PLAN.interval,
            },
          },
          quantity: 1,
        },
      ],
      
      // Success and cancel URLs
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      
      // Metadata
      metadata: {
        plan: 'pro',
      },
      
      // Subscription settings with 14-day trial
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          plan: 'pro',
        },
      },
      
      // French locale
      locale: 'fr',
      
      // Custom text
      custom_text: {
        submit: {
          message: '🎯 Essai gratuit de 14 jours - Aucun prélèvement avant la fin de l\'essai. Annulez à tout moment.',
        },
      },
    });

    return NextResponse.json({
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id,
    });

  } catch (error) {
    console.error('Stripe checkout error:', error);
    
    // Handle specific Stripe errors
    if (error instanceof Error) {
      if (error.message.includes('Invalid API Key')) {
        return NextResponse.json(
          { error: 'Configuration Stripe invalide. Veuillez contacter le support.' },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: `Erreur de paiement: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
