'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const orderId = searchParams.get("order_id");

  return (
    <div className="min-h-dvh bg-brand p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Waitlist!
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was successful. We'll be in touch soon with more details about becoming a Banjara companion.
        </p>

        {paymentId && (
          <div className="bg-gray-50 rounded p-4 mb-6 text-sm">
            <p className="text-gray-600">
              <span className="font-medium">Payment ID:</span> {paymentId}
            </p>
            {orderId && (
              <p className="text-gray-600 mt-1">
                <span className="font-medium">Order ID:</span> {orderId}
              </p>
            )}
          </div>
        )}

        <p className="text-sm text-gray-500">
          Check your email for confirmation and next steps.
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-brand text-white rounded font-semibold hover:opacity-90"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-dvh bg-brand flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
