import { NextRequest, NextResponse } from 'next/server';
import { createPayPalOrder } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();

    if (plan !== 'pro') {
      return NextResponse.json(
        { error: 'Plan non supporté' },
        { status: 400 }
      );
    }

    // Prix du plan Pro en euros
    const amount = '9.00';

    const order = await createPayPalOrder(amount, 'EUR', 'Plan Pro - Mensuel');

    // Get the approval URL from the PayPal response
    const approvalUrl = order.links?.find(
      (link) => link.rel === 'approve'
    )?.href;

    if (!approvalUrl) {
      throw new Error('No approval URL returned from PayPal');
    }

    return NextResponse.json({
      orderId: order.id,
      checkoutUrl: approvalUrl,
    });

  } catch (error) {
    console.error('PayPal checkout error:', error);
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur lors de la création du paiement' },
      { status: 500 }
    );
  }
}
