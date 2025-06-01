import Link from "next/link";
export default function Tickets() {
    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center gap-8 max-w-4xl">

            <h3 className="text-2xl font-extrabold dark:text-white text-center">Stay tuned for our next adventure:coming the weekend before Halloween in October. Keep an eye out for our early bird tickets! Until next time!🎃👻🌙</h3>

            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
            bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
            text-pink-500 font-bold
            gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
            text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
            dark:hover:text-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out"
                href="/"
                target="_self"
                rel="noopener noreferrer"
            >
                Back to Main Page
            </Link>

        </main>
    );
}
