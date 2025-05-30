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
        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">
          <div>
            <h2 className="text-4xl font-extrabold dark:text-white text-center">Back to 80s Camping Adventure 💃🏻🪩🕺🏽🌈</h2>
            <h3 className="text-2xl font-extrabold dark:text-white text-center">Calling all San Diego LGBTQ+ Adventurers!🏕️🎸🎤</h3>
            <h3 className="text-2xl font-extrabold dark:text-white text-center mb-5">LAST full weekend tickets available!🎟️💨 </h3>

            <Link
              className="w-[50%] mx-auto rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
          bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
          text-pink-500 font-bold
          gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
          text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
          dark:hover:text-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out"
              href="/tickets"
              target="_self"
              rel="noopener noreferrer"
            >
              Grab your tickets!
            </Link>

            <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
              <p>
                Join a group of like minded but diverse group of new friends who love nature, hiking, camping and sharing stories around a campfire with their furry pet friends. Just 30 mins away from San Diego, the breathtaking views of Lake Dixon will surely be a memorable experience through nature and fun 80's nostalgia themed activities. Check out everything you can expect below.
                Don't miss out - Spots are limited! RSVP and secure your place today!
              </p>
              <p>Here's what awaits you:</p>

              <ul className="list-disc list-inside space-y-2">
                <li>Group breakfast on Saturday & Sunday morning</li>
                <li> Social Hour Provided Friday & Saturday Nights 5-6PM</li>
                <li> 80s themed Karaoke Night with Incredible Prizes</li>
                <li> Themed Campsite Decorating Contest </li>
                <li>Large Outdoor Movie Ampitheater - Movies under the stars Friday & Saturday</li>
                <li>80s throwback! - Bring your best 80s outfit!</li>
                <li>Embark on a group scenic hike! Explore the beauty of the surrounding landscape and get your heart pumping.</li>
                <li>Group bbq on Saturday by the lake</li>
                <li>Fun Games & Activities - Await at our private and secluded campsite. We’ll have the following; Volleyball, Cornhole, Flipcup and beer pong to name a few! </li>
                <li>Even friends who can't camp can join the festivities! - Day Passes include lunch bbq, activities at the lake, 80s karaoke, and movie night.</li>
                <li>Relax and unwind by the campfire, share stories under the stars, and enjoy the stunning scenery. Whether you're an avid hiker or simply seeking a relaxing escape, there's something for everyone.</li>
                <li>For the RV enthusiasts and glamping aficionados - Please Contact us directly for your questions</li>
              </ul>

              <p>
                <b>Peace of mind is key!</b> Enjoy the convenience of on-site bathroom and shower facilities, 1 Shower token provided. More shower tokens can be purchased directly from the concession stand.
              </p>

              <p>
                <b>Feeling adventurous? </b> Explore the lake with rowboats, motorboats, or paddle boats available for rent (not included). Please visit
                <a
                  href="https://www.camplife.com/campground/Dixon+Lake+Recreation+Area"
                  target="_blank"
                  className="text-blue-500 hover:underline ml-2 mr-2"
                  rel="noopener noreferrer"
                >
                  Dixon Lake Recreation Area
                </a>
                for more information.
              </p>

              <p>
                <b>For dinner you can either bring your own food(or Your Own Cook!)</b> , but Casa del Abuelo food truck will be on site both nights, check the menu for both nights <Link href="/food" target="_self" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2 mr-2">here</Link>! Take advantage of the provided charcoal grill pits, and water access for a hassle-free culinary experience.
              </p>

              <p>
                <b> Don't forget your bike or e-bike!</b> Explore the breathtaking surroundings on two wheels.
              </p>

              <p>
                <b>Need camping gear? </b> We have a network of generous campers willing to share! Just DM us to connect.
              </p>

              <p><b>This is your chance to escape the ordinary and embrace an extraordinary adventure. RSVP now and secure your spot!</b></p>
              <p><b>Back to 80s - Hosted by P.I.M.P - Pride In My Pines</b></p>
            </div>
          </div>
        </section>
        <Image
          aria-hidden
          src="/Promo2025.jpg"
          alt="Camp Flier"
          width={700}
          height={700}
        />
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
            text-pink-500 font-bold
            gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
            text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
            dark:hover:text-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out"
          href="/tickets"
          target="_self"
          rel="noopener noreferrer"
        >
          Tickets!
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
