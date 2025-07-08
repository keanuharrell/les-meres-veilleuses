import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, frequency } = await request.json();

    if (!amount || amount < 50) { // Minimum 0.50€
      return NextResponse.json(
        { error: 'Le montant minimum est de 0.50€' },
        { status: 400 }
      );
    }

    // Create payment intent for one-time donation
    if (frequency === 'once') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount, // Amount in cents
        currency: 'eur',
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          association: 'Les Mères Veilleuses',
          purpose: 'Don pour le Raid Amazones et la recherche contre les cancers du sang',
        },
      });

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
      });
    }

    // Create subscription for monthly donations
    if (frequency === 'monthly') {
      // First, create or retrieve customer
      const customer = await stripe.customers.create({
        metadata: {
          association: 'Les Mères Veilleuses',
        },
      });

      // Create price for monthly subscription
      const price = await stripe.prices.create({
        unit_amount: amount,
        currency: 'eur',
        recurring: {
          interval: 'month',
        },
        product_data: {
          name: 'Don mensuel - Les Mères Veilleuses',
          description: 'Don mensuel pour soutenir notre mission',
        },
      });

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price: price.id,
          },
        ],
        payment_behavior: 'default_incomplete',
        payment_settings: {
          save_default_payment_method: 'on_subscription',
        },
        expand: ['latest_invoice.payment_intent'],
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        subscriptionId: subscription.id,
      });
    }

    return NextResponse.json(
      { error: 'Fréquence non supportée' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    );
  }
}