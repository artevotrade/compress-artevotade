import Stripe from 'stripe';

// Initialize Stripe with secret key
// In production, use environment variable: STRIPE_SECRET_KEY
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

// Price IDs for the Pro plan
// In production, create these products in Stripe Dashboard
export const STRIPE_CONFIG = {
  proPlanPriceId: process.env.STRIPE_PRO_PRICE_ID || 'price_pro_monthly',
  successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`,
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
