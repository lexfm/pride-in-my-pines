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
        <PaymentButtons/>

      </div>
      <div className="flex gap-6 items-center justify-center flex-wrap mt-10 mb-10" >
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white
               gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
               text-lg sm:text-xl h-14 sm:h-16 px-6 sm:px-8 shadow-lg 
               dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >
            Home
          </Link>
        </div>
    </main>
  );
}