'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FailureContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "payment_failed";
  const orderId = searchParams.get("order_id");

  const reasonMessages: Record<string, string> = {
    payment_failed: "Your payment could not be processed. Please try again.",
    verification_failed: "Payment verification failed. Please contact support if amount was deducted.",
    cancelled: "You cancelled the payment.",
    error: "An unexpected error occurred. Please try again.",
  };

  const message = reasonMessages[reason] || reasonMessages.error;

  return (
    <div className="min-h-dvh bg-brand p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment {reason === "cancelled" ? "Cancelled" : "Failed"}
        </h1>

        <p className="text-gray-600 mb-6">{message}</p>

        {orderId && (
          <div className="bg-gray-50 rounded p-4 mb-6 text-sm">
            <p className="text-gray-600">
              <span className="font-medium">Order ID:</span> {orderId}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <a
            href="/"
            className="block w-full px-6 py-3 bg-brand text-white rounded font-semibold hover:opacity-90"
          >
            Try Again
          </a>

          {reason === "verification_failed" && (
            <p className="text-xs text-gray-500 mt-4">
              If amount was deducted from your account, please contact us at support@banjara.life with your order ID.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-dvh bg-brand flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <FailureContent />
    </Suspense>
  );
}
