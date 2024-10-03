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

        <PaymentButtons />
        <h3 className="text-2xl font-extrabold dark:text-white text-center">Weekend Sold Out – Grab Your Saturday Pass While You Can, or Join our Waitlist below!</h3>
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">

          <p className="text-lg text-gray-300 text-center mb-6">
             Join our <span className="text-purple-500 font-semibold">exclusive waitlist</span> and be the first to know if any more weekend spots become available for this haunted outdoor adventure. 👻✨
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTUJSIusuhiTtmpoTW79ur5_LkK7cYca7ovRFfftb3dIEp4g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 via-purple-700 to-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:via-black hover:to-orange-500 transition-colors duration-300 ease-in-out"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
