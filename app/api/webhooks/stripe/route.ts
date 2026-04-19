import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Placeholder for Stripe signature verification & event handling
  const payload = await req.json();
  console.log("[Stripe Webhook] Received event:", payload.type);
  
  // TODO: Handle event types (payment_intent.succeeded, invoice.paid, etc.)
  
  return NextResponse.json({ received: true }, { status: 200 });
}