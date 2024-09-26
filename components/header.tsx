import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 h-[80px] sm:h-[12vh]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with background image (desktop view) */}
        <div className="hidden md:block">
          <Link href="/" passHref>
            <div className="w-[200px] h-[140px] bg-contain bg-[center_bottom_12px] bg-no-repeat bg-[url('/BWLogo.png')] bg-black cursor-pointer">
              <span className="sr-only">Home</span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center justify-center mt-5">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-12 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>


        {/* Navigation Items */}
        <div className={`text-center absolute top-[100%] left-0 w-full bg-black md:static md:flex md:w-auto flex-col md:flex-row items-center gap-4 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
          {pathname === "/" ?
            (<Link href="/tickets" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-purple-800 hover:to-black transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
              Tickets
            </Link>) :
            (<Link href="/" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-purple-800 hover:to-black transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
              More Info
            </Link>)}
          <Link href="/#testimonials" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-black hover:to-orange-600 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-purple-500">
            Images
          </Link>
          <Link href="/contact" className="px-4 py-2 block text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-black hover:to-purple-800 transition-all duration-300 ease-in-out md:hover:bg-transparent md:hover:text-orange-500">
            Wanna gear up?
          </Link>
        </div>


        {/* Logo with background image (mobile view) */}
        <div className="md:hidden absolute top-0 right-0 w-[140px] h-[80px] overflow-hidden">
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

