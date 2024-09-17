import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-4 row-start-2 items-center items-start">
        <Image
          aria-hidden
          src="/PIMPOctDates.png"
          alt="File icon"
          width={700}
          height={700}
        />
        <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">
          <div>
            <h2 className="text-4xl font-extrabold dark:text-white text-center">The Ghosts, Gays and They’s Camping Adventure</h2>
            <h3 className="text-2xl font-extrabold dark:text-white text-center">Calling all San Diego LGBTQ+ Adventurers!</h3>

            <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
              <p>
                Join a group of like minded but diverse group of new friends who love nature, hiking, camping and sharing stories around a campfire with their furry pet friends. Just 30 mins away from San Diego, the breathtaking views of Lake Dixon will surely be a memorable experience through nature and fun halloween themed activities. Check out everything you can expect below.
                Don't miss out - Spots are limited! RSVP and secure your place today!
              </p>
              <p>Here's what awaits you:</p>

              <ul className="list-disc list-inside space-y-2">
                <li>Group breakfast on Saturday & Sunday morning (Scrambled eggs, sausage & crepes)</li>
                <li> Social Hour Provided Friday & Saturday Nights 5-6PM</li>
                <li> DRAG Bingo Night with Incredible Prizes</li>
                <li>Best Tent & Onesie/Halloween Costume Contest - 1 Night Stay at the Lafayette Hotel in San Diego</li>
                <li>Large Outdoor Movie Ampitheater - Movies under the stars Friday & Saturday</li>
                <li>Onesie Night - Bring your best onesie and or your Halloween costume!</li>
                <li>Embark on a scenic hike led by Dakota! Explore the beauty of the surrounding landscape and get your heart pumping.</li>
                <li>Group Lunch sponsored by Jeff Brick - COMPASS Real Estate - Burgers & Cheeseburgers Served</li>
                <li>Fun Games & Activities - Await at our private and secluded campsite. We’ll have the following; Volleyball, Cornhole, Flipcup and beer pong to name a few!</li>
                <li>Even friends who can't camp can join the festivities! - Day Passes include lunch bbq, activities at the lake, drag bingo, and movie night.  Don't forget to bring something for dinner</li>
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
                <b>Dinners are Bring Your Own Food (or Your Own Cook!)</b> , but we've got you covered on everything else! Take advantage of the provided charcoal grill pits, and water access for a hassle-free culinary experience.
              </p>

              <p>
                <b> Don't forget your bike or e-bike!</b> Explore the breathtaking surroundings on two wheels.
              </p>

              <p>
                <b>Need camping gear? </b> We have a network of generous campers willing to share! Just DM us to connect.
              </p>

              <p><b>This is your chance to escape the ordinary and embrace an extraordinary adventure. RSVP now and secure your spot!</b></p>
              <p><b>Ghost Gays and Days - Hosted by P.I.M.P - Pride In My Pines</b></p>
            </div>
          </div>
        </section>
        <div className="flex gap-6 items-center justify-center flex-wrap">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white 
               gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
               text-lg sm:text-xl h-14 sm:h-16 px-6 sm:px-8 shadow-lg 
               dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
            href="/tickets"
            target="_self"
            rel="noopener noreferrer"
          >
            Join the adventure!
          </Link>
        </div>


      </main>
    </>
  );
}
