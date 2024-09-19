import Link from "next/link";
import { useRouter } from 'next/router';

// components/Header.tsx
const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="fixed top-0 left-0 z-50 h-[25vh] sm: w-full bg-contain bg-center bg-no-repeat bg-[url('/bannerPIMP.png')] bg-gray-900">
      <div className="flex gap-6 items-center justify-center flex-wrap">
        {pathname === "/" ?
          (<Link
            className="relative top-[18vh] mb-3 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white 
               gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
               text-lg sm:text-xl h-11 sm:h-16 px-6 sm:px-8 shadow-lg 
               dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
            href="/tickets"
            target="_self"
            rel="noopener noreferrer"
          >
            Save your spot!
          </Link>
          ) :
          (<Link
              className="relative top-[18vh] mb-3 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
               bg-gradient-to-r from-orange-600 via-purple-800 to-black
               text-white 
               gap-2 hover:bg-gradient-to-r hover:from-purple-800 hover:via-black hover:to-orange-600 
               text-lg sm:text-xl h-11 sm:h-16 px-6 sm:px-8 shadow-lg 
               dark:hover:text-purple-300 hover:scale-105 transform transition duration-300 ease-in-out"
              href="/"
              target="_self"
              rel="noopener noreferrer"
            >
              More Info
            </Link>)
        }



      </div>

    </header>
  );
};

export default Header;
