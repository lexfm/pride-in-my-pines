import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false); // Close menu on route change
    };

    // Listen to route changes and close the dropdown
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 h-[80px] sm:h-[13vh]">
      <div className="w-full flex justify-between items-center overflow-hidden">
        {/* Logo with background image (desktop view) */}
        <div className="hidden md:block">
          <Link href="/" passHref>
            <div className="w-[240px] h-[80px] sm:h-[13vh] bg-[length:120%] bg-cover bg-[center_right_1rem] bg-[center_top_0.1rem] bg-no-repeat bg-[url('/BWLogo.png')] bg-black cursor-pointer">
              <span className="sr-only">Home</span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center justify-center mt-5 z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-12 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        <div className=" w-full absolute md:hidden">
          {pathname === "/" ?
            (
              <Link
                className="w-[40%] relative mt-5 left-[20vw] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white 
               gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
               text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg sm:mt-3
               dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
                href="/tickets"
                target="_self"
                rel="noopener noreferrer"
              >
                Save your spot!
              </Link>
            ) : null
          }
        </div>




        {/* Navigation Items */}
        <div className={`text-center absolute top-[100%] left-0 w-full bg-black md:static md:flex md:w-auto flex-col md:flex-row items-center gap-4 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          {pathname === "/tickets" ?
            (<Link href="/" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-purple-800 hover:to-black transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
              More Info
            </Link>) :
            (<Link href="/tickets" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-purple-800 hover:to-black transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
              Tickets
            </Link>)}
          <Link href="/carpool" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-black hover:to-orange-600 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-purple-500" onClick={() => pathname === '/' ? setIsOpen(false) : null}>
            Wanna Carpool?
          </Link>
          <Link href="/tacos" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-black hover:to-purple-800 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
            Friday Tacos!
          </Link>
          <Link href="/gear" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-black hover:to-purple-800 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
            Wanna gear up?
          </Link>
          <Link href="/intinerary" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-black hover:to-purple-800 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
            Intinerary
          </Link>
        </div>


        {/* Logo with background image (mobile view) */}
        <div className="md:hidden absolute top-0 right-0 w-[160px] h-[80px] overflow-hidden">
          <Link href="/" passHref>
            <div className="w-[160px] h-[100px] bg-cover bg-center bg-no-repeat bg-[url('/BWLogo.png')] bg-black cursor-pointer transform scale-110 transition-transform duration-300 ease-in-out hover:scale-115">
              {/* Accessible text for screen readers */}
              <span className="sr-only">Home</span>
            </div>
          </Link>
        </div>

      </div>
    </nav>
  );
}

