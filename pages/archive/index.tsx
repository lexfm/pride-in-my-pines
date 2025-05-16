import Image from "next/image";
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import ImageCarousel from "@/components/imageCarousel";

interface HomeProps {
  images: string[];
}

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), 'public', 'PIMP2024');
  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.filter(file =>
    /\.(jpe?g|png|gif)$/i.test(file) // Only images
  ).map(fileName => `/PIMP2024/${fileName}`)


  return {
    props: {
      images
    },
  };
}


export default function Home({ images }: HomeProps) {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center items-start">
        <Image
          aria-hidden
          src="/PIMPOctDates.png"
          alt="Camp Flier"
          width={700}
          height={700}
        />
        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">



          <h2 className="text-4xl font-extrabold dark:text-white text-center">🎃 "Thank You for Making The Gays, Theys, and Ghosts Adventure a Haunting Success!" 👻</h2>

          <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
            <p>
              We couldn’t have done it without your energy, spirit, and love! 💖 Get ready to turn back time and gear up for the next epic journey: 80’s Odyssey - coming May 2025! 🌈🎸🕺 Don’t miss out on the neon, nostalgia, and nonstop fun! ✨ Save the date and stay tuned for early bird tickets!
            </p>

          </div>
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
        <ImageCarousel images={images} />
      </main>
    </>
  );
}
