/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import PaymentButtons from "../../components/paymentButtons";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': any; // Define your custom element here
    }
  }
}

export default function Tickets() {
  return (
    <main className="tickets-section">
      <div className="items-center items-start pt-10">
        <h3 className="text-2xl font-extrabold dark:text-white text-center mb-10 text">You have two adventure options!</h3>
        <PaymentButtons />

      </div>
      {/* To apply image carrousel */}
    </main>
  );
}