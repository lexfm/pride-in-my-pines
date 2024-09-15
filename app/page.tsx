import Image from "next/image";
import { Facebook, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid justify-items-center  p-2 pb-10 gap-8 font-[family-name:var(--font-geist-sans)]">
      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>
      <header className="relative flex items-center justify-center  min-h-48 max-h-48 md:max-h-64 lg:max-h-32 pimp-bg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Slight overlay */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-600 to-yellow-500 drop-shadow-2xl text-center">
          Pride in My Pines
        </h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center items-start">


        <div className="payments">

          <stripe-buy-button
            class="bg-gray-800 text-white p-6"
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
        <section className="w-full md:w-[70vw] lg:w-[50vw] mx-auto">
          <div className="max-h-[50vh] overflow-y-auto">
            <h2 className="text-4xl font-extrabold dark:text-white info-coming">The Ghost, Gays and They’s Camping Adventure</h2>
            <h3 className="text-2xl font-extrabold dark:text-white info-coming">Calling all San Diego LGBTQ+ Adventurers!</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              Join a group of like minded but diverse group of new friends who love nature, hiking, camping and sharing stories around a campfire with their furry pet friends. Just 30 mins away from San Diego, the breathtaking views of Lake Dixon will surely be a memorable experience through nature and fun halloween themed activities. Check out everything you can expect below.
              Don't miss out - Spots are limited! RSVP and secure your place today!
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">Here's what awaits you:</p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg font-medium">
              <li>Group breakfast on Saturday & Sunday morning (Scrambled eggs, saussage & crepes)</li>
              <li> Social Hour Provided Friday & Saturday Nights 5-6PM</li>
              <li> DRAG Bingo Night with Incredible Prizes</li>
              <li>Best Tent & Onesie/Halloween Costume Contest - 1 Night Stay at the Lafayette Hotel in San Diego</li>
              <li>Large Outdoor Movie Ampitheater - Movies under the stars Friday & Saturday</li>
              <li>Onesie Night - Bring your best onesie and or your Halloween costume!</li>
              <li>Embark on a scenic hike led by Dakota! Explore the beauty of the surrounding landscape and get your heart pumping.</li>
              <li>Group Lunch sponsored by Jeff Brick - COMPASS Real Estate - Burgers & Cheeseburgers Served</li>
              <li>Fun Games & Activities - Await at our private and secluded campsite. Even friends who can't camp can join the festivities! We’ll have the following; Volleyball, Cornhole, Flipcup and beer pong to name a few!</li>
              <li>Relax and unwind by the campfire, share stories under the stars, and enjoy the stunning scenery. Whether you're an avid hiker or simply seeking a relaxing escape, there's something for everyone.</li>
              <li>For the RV enthusiasts and glamping aficionados - Please Contact us directly for your questions</li>
            </ul>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b>Peace of mind is key!</b> Enjoy the convenience of on-site bathroom and shower facilities 1 Shower token provided. More shower tokens can be purchased directly from the concession stand
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b>Feeling adventurous? </b> Explore the lake with rowboats, motorboats, or paddle boats available for rent (not included). https://www.camplife.com/campground/Dixon+Lake+Recreation+Area
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b>Dinners are BYOC</b> , but we've got you covered on everything else! Take advantage of the provided charcoal grill pits, and water access for a hassle-free culinary experience.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b> Don't forget your bike or e-bike!</b> Explore the breathtaking surroundings on two wheels.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b>Need camping gear? </b> We have a network of generous campers willing to share! Just DM us to connect.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">
              <b>NThis is your chance to escape the ordinary and embrace an extraordinary adventure. RSVP now and secure your spot!
              </b>
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium"><b>This is your chance to escape the ordinary and embrace an extraordinary adventure. RSVP now and secure your spot!</b></p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium"><b>Ghost Gays and Days - Hosted by P.I.M.P - Pride In My Pines</b></p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium">ADD to we travel if possible the following</p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium"><b>Interested in an ebike rental</b></p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium"><b>Emergency Contact Info</b></p>
            <p className="text-gray-400 text-base leading-relaxed mb-4 text-lg font-medium"><b>Day Pass $25</b></p>
          </div>
        </section>

        <Image
          aria-hidden
          src="/flyer.png"
          alt="File icon"
          width={700}
          height={700}
          unoptimized
        />


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/prideinmypines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/prideinmypines"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
          Facebook
        </a>

      </footer>
    </div>
  );
}
