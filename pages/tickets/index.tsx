import Link from "next/link";
export default function Tickets() {
    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center gap-8 max-w-4xl">

            <h3 className="text-2xl font-extrabold dark:text-white text-center">The Magic Continues: Back to 80s – May 2025!🌈👥 </h3>


            <p className="text-1xl font-bold text-center max-w-2xl mb-8">
                Join us for an unforgettable weekend of pride, community, and amazing food! Choose the ticket that best suits your schedule.
            </p>

            <div className="grid md:grid-cols-2 gap-8 w-full">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg overflow-hidden text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-4">Full Weekend Pass</h2>
                        <div className="mb-6">
                            <p className="text-3xl font-bold mb-2">$69</p>
                            <p className="text-pink-100">Full Weekend Pass that includes all activities and festivities! Including social hours, 80s karaoke, onesie party, the best decorated campsite contest and more! 🎉👯⛺️✨</p>
                            <p className="text-pink-100">Enjoy fun with no limits!</p>
                        </div>
                        <a
                            href="https://buy.stripe.com/cN2g2Tdxf27S6RicMR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-pink-100 transition-colors duration-200"
                        >
                            Get FullWeekend Pass
                        </a>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-4">Saturday Day Pass</h2>
                        <div className="mb-6">
                            <p className="text-3xl font-bold mb-2">$25</p>
                            <p className="text-purple-100">Access to all Saturday events 🥳</p>
                            <p className="text-purple-100">Save some memories for the day!</p>
                        </div>
                        <a
                            href="https://buy.stripe.com/bIYdUL50JcMwejKbIK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-100 transition-colors duration-200"
                        >
                            Get Saturday DayPass
                        </a>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-extrabold dark:text-white text-center leading-relaxed">
                Would you like a special rate for volunteering? <Link href="/volunteer" className="text-pink-500 hover:text-blue-800 hover:underline ml-2 mr-2">Click here</Link> to learn more!
            </h3>

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
