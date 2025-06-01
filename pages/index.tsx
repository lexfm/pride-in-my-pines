import fs from 'fs';
import path from 'path';
import ImageCarousel from "@/components/imageCarousel";
import Image from "next/image";
import Link from 'next/link';

interface HomeProps {
  images1: string[];
  images2: string[];
}


export async function getStaticProps() {
  const oct2024Directory = path.join(process.cwd(), 'public', 'PIMP2024');
  const april2024Directory = path.join(process.cwd(), 'public', 'testimonials');
  const oct2024FileNames = fs.readdirSync(oct2024Directory);
  const april2024FileNames = fs.readdirSync(april2024Directory);

  const oct2024Images = oct2024FileNames.filter(file =>
    /\.(jpe?g|png|gif)$/i.test(file) // Only images
  ).map(fileName => `/PIMP2024/${fileName}`)

  const april2024Images = april2024FileNames.filter(file =>
    /\.(jpe?g|png|gif)$/i.test(file) // Only images
  ).map(fileName => `/testimonials/${fileName}`)


  return {
    props: {
      images1: oct2024Images,
      images2: april2024Images
    },
  };
}


export default function Home({ images1, images2 }: HomeProps) {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center items-start">
        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto text-gray-400 leading-relaxed space-y-4 mt-5 text-xl">
          <h3 className="text-4xl font-extrabold dark:text-white text-center">Back to the 80s Camping Adventure 💃🏻🪩🕺🏽🌈</h3>
          <p>Thank you for making this year's Back to the 80s a spectacular success! We had an absolute blast and loved seeing all your neon, nostalgia, stellar karaoke performances, and dance moves.</p>
          <p>We hope the weekend was full of unforgettable memories, good vibes, and new friendships! 🎉👯⛺️✨</p>
          <p>If you have any pictures or videos from the weekend, please tag us on Instagram  <Link href="https://www.instagram.com/prideinmypines/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 underline">Instagram</Link>! #prideinmypines #backto80s or also share in our <Link href="https://www.facebook.com/groups/prideinmypines/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 underline">Facebook Group</Link>!</p>
          <p>Stay tuned for our next adventure:coming the weekend before Halloween in October. Keep an eye out for our early bird tickets! Until next time!</p>

          <p><strong>Hosted by P.I.M.P – Pride In My Pines</strong></p>


        </section>
        <Image
          aria-hidden
          src="/Promo2025.jpg"
          alt="Camp Flier"
          width={700}
          height={700}
        />
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
        </div>

      </section>

      <section id="testimonials">
        <h3 className="text-2xl font-extrabold dark:text-white text-center pt-5">Previous adventures 💖✨</h3>
        <p>Past adventures and memories are what make our community so special! We are so grateful for all the love and support we have received over the years. Here are some of the amazing memories from our past adventures! 🌈✨</p>
        <h3 className="text-2xl font-extrabold dark:text-white text-center pt-5"> The Gays, Theys, and Ghosts (Oct 2024) 🎃👻🌙 </h3>
        <ImageCarousel images={images1} />
        <h3 className="text-2xl font-extrabold dark:text-white text-center pt-5"> Spring 2024 🌺🌈☀️ </h3>
        <ImageCarousel images={images2} />

        <div className="flex flex-col gap-6 items-center justify-center flex-wrap mt-3 mb-3">
        </div>

      </section>
    </>
  );
}
