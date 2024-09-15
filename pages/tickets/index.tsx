/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
// import styles from "./page.module.css";

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
        <h3 className="text-2xl font-extrabold dark:text-white info-coming mb-10">You have two adventure options!</h3>


        <div className="payments flex flex-col sm:flex-row justify-center items-center gap-4">

          <stripe-buy-button
            buy-button-id="buy_btn_1PyMq92NINoc8Fp0NG3qtqKK"
            publishable-key="pk_live_51PyKqx2NINoc8Fp0bNfrEkw8XieRB3bCfsizYgS2f4QWiOZErAcckGlYbgoMQ1uQFSnVftoR7Co6Nmv7QPRj6Xj600FPbBO0AR"
          >
          </stripe-buy-button>

          <stripe-buy-button
            buy-button-id="buy_btn_1PyMnT2NINoc8Fp0BUAmuO6F"
            publishable-key="pk_live_51PyKqx2NINoc8Fp0bNfrEkw8XieRB3bCfsizYgS2f4QWiOZErAcckGlYbgoMQ1uQFSnVftoR7Co6Nmv7QPRj6Xj600FPbBO0AR"
          >
          </stripe-buy-button>

        </div>

      </div>
      <div className="flex gap-6 items-center justify-center flex-wrap mt-10 mb-10" >
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white dark:text-orange-500
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