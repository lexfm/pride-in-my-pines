
import Image from "next/image";
import Link from "next/link";

export default function EarlyBird() {
    return (
        <main className="earlybird-section flex flex-col gap-4 row-start-2 items-center items-start">

            <h3 className="text-2xl font-extrabold dark:text-white text-center">"The Magic Continues: Early Bird Adventure – May 2025!"🌈👥 </h3>
            <h3 className="text-2xl font-extrabold dark:text-white text-center">🕺🎉 Get Ready to Flashback to the 80's! 🎉💃🏻</h3>
            
            <Image
                aria-hidden
                src="/earlyBirdMay25.png"
                alt="EarlyBird"
                width={700}
                height={700}
            />
            <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">

                <p>
                    Don’t miss out on the next unforgettable adventure! Join us for another weekend of fun, freedom, and friendship under the stars - this time, with an epic 80’s theme! 🌟 Book early to lock in your spot for the last weekend of May 2025. Early bird tickets are flying away fast - snag yours now and get ready for the next chapter of magic! 🌈✨
                </p>
            </div>

            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
      bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
      text-pink-500 
      gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
      text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
      dark:hover:text-pink-700 hover:scale-105 transform transition duration-300 ease-in-out"
                href="https://buy.stripe.com/cN2g2Tdxf27S6RicMR"
                target="_blank"
                rel="noopener noreferrer"
            >
                Save your spot for the 80's Oddisey!
            </Link>

        </main>
    );
}
