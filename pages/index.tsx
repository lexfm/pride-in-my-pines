import ImageCarousel from "@/components/imageCarousel";
// import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center items-start">

        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">



          <h2 className="text-4xl font-extrabold dark:text-white text-center">🎃 "Thank You for Making The Gays, Theys, and Ghosts Adventure a Haunting Success!" 👻</h2>

          <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
          <p>
            We couldn’t have done it without your energy, spirit, and love! 💖 Pictures coming soon 📸  Get ready to turn back time and gear up for the next epic journey: 80’s Odyssey—coming May 2025! 🌈🎸🕺 Don’t miss out on the neon, nostalgia, and nonstop fun! ✨ Save the date and stay tuned for early bird tickets!
          </p>
          </div>
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
      <section id="testimonials">
        <h3 className="text-2xl font-extrabold dark:text-white text-center mt-3 text">Check out our previous adventure!</h3>
        <ImageCarousel />
        <div className="flex flex-col gap-6 items-center justify-center flex-wrap mt-3 mb-3">
          <h3 className="text-2xl font-extrabold dark:text-white text-center">Save your spot for out Next Adventure: Back to the 80s, May 2025 💃🏻🪩🕺🏽🌈👥 </h3>


        </div>

      </section>
    </>
  );
}
