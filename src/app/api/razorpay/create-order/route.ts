import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, name, email, phone } = body;

    // Validate inputs
    if (!amount || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Amount should be in paise (INR)
    if (amount < 10000 || amount > 200000 || amount % 10000 !== 0) {
      return NextResponse.json(
        { error: "Invalid amount. Must be between 100-2000 INR in steps of 100" },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const options = {
      amount: amount, // amount in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        name,
        email,
        phone,
        purpose: "waitlist_companion",
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
