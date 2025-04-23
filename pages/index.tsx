import ImageCarousel from "@/components/imageCarousel";
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center items-start">
        <Image
          aria-hidden
          src="/Promo2025.jpg"
          alt="Camp Flier"
          width={700}
          height={700}
        />
        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

          <h3 className="text-2xl font-extrabold dark:text-white text-center">
            Get ready to turn back time and gear up for the next epic journey: Back to 80’s May 30th - June 1st 2025! 🌈🎸🕺 Don’t miss out on nostalgia and nonstop fun! ✨
          </h3>

          <h3 className="text-2xl font-extrabold dark:text-white text-center">Save your spot for out Next Adventure: Back to the 80s, May 2025 💃🏻🪩🕺🏽🌈👥 </h3>
        </section>
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
            text-pink-500
            gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
            text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
            dark:hover:text-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out"
          href="/earlybird"
          target="_self"
          rel="noopener noreferrer"
        >
          Next Adventure: Early Bird!
        </Link>
      </main>

      <section className="contribute w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

        <h3 className="text-2xl font-extrabold dark:text-white text-center pt-5">  Help Keep the Magic Alive! 🪩💃🏻✨🕺🏽🌈 </h3>

        <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">

          <p>
            Our amazing committee has invested their time, talents, and resources to make this weekend unforgettable. If you’d like to support and ensure we keep creating these magical experiences, please consider making a donation. Every little bit helps!
          </p>

          <div className="payments flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">

            <div className="text-center">
              <a
                href="https://buy.stripe.com/9AQ9EvfFnaEob7yeUY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 via-purple-700 to-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:via-black hover:to-orange-500 transition-colors duration-300 ease-in-out"
              >
                Donations ❤️🌈
              </a>
            </div>
          </div>

          <p>Thank you for your generosity!</p>

          <p>"Back to 80's" by Pride In My Pines</p>

        </div>

      </section>

      <section id="testimonials">
        <ImageCarousel />
        <div className="flex flex-col gap-6 items-center justify-center flex-wrap mt-3 mb-3">
        </div>

      </section>
    </>
  );
}
