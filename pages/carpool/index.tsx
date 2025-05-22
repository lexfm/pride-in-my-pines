import Link from "next/link";

export default function Carpool() {
    return (
        <main className="carpool-section">
            <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">
                <h3 className="text-2xl font-extrabold dark:text-white text-center">Looking for a ride or want to share yours to our epic camping trip? Join our carpool network and connect with fellow adventurers! 🚗💨</h3>
                <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
                    <p>How it works:</p>
                    <ul className="list-disc list-inside">
                        <li>
                            Post your ride: If you have a car, let us know your starting point, destination, and any available seats.
                        </li>
                        <li>
                            Find a ride: Looking for a seat? Search for rides from your area and connect with drivers.
                        </li>
                    </ul>
                    <p>Let's share the road and the adventure together! 🛣️✨</p>
                    <p>
                        Go to our
                        <a
                            href="https://www.groupcarpool.com/t/c8itqk"
                            target="_blank"
                            className="text-blue-500 hover:underline ml-2 mr-2"
                            rel="noopener noreferrer"
                        >
                            Group Carpool
                        </a>
                        page for more information.
                    </p>
                </div>

                <Link
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
                    bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400
                    text-pink-500 font-bold
                    gap-2 hover:bg-gradient-to-r hover:from-green-400 hover:via-yellow-300 hover:to-pink-400 
                    text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
                    dark:hover:text-pink-400 hover:scale-105 transform transition duration-300 ease-in-out mt-8"
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                    Back to Home
                </Link>
            </section>
        </main>
    );
}
