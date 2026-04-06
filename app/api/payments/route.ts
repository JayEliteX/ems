// Stripe payment endpoints

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const { amount } = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}

export async function verifyPurchase(request) {
    // Logic for verifying purchase
}
