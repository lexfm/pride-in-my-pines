import Link from "next/link";
import PaymentButtons from "../../components/paymentButtons";


export default function Tickets() {
  return (
    <main className="tickets-section">
      <div className="flex flex-col items-center gap-3 mb-10 mt-2">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
                 bg-gradient-to-r from-orange-600 via-purple-800 to-black
                 text-white 
                 gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
                 text-lg sm:text-xl h-11 sm:h-16 px-6 sm:px-8 shadow-lg sm:mt-3
                 dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
          href="/#testimonials"
        >
          Check out some pics!
        </Link>

        <h3 className="text-2xl font-extrabold dark:text-white text-center">You have two adventure options – Tickets Are Almost Gone!</h3>

        <PaymentButtons />
      </div>
    </main>
  );
}
