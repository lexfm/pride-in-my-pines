
export default function Carpool() {
    return (
        <main className="carpool-section">

            <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

                <h3 className="text-2xl font-extrabold dark:text-white text-center"> Carpool for "The Ghosts, Gays, and Theys Outdoor Adventure" 👻🌈👥 It's Preferred but not required!</h3>
                <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">
                    <p>
                        Looking for a ride or want to share yours to our epic camping trip? Join our carpool network and connect with fellow adventurers! 🚗💨
                    </p>

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
                            href="http://www.groupcarpool.com/t/4tgs3m"
                            target="_blank"
                            className="text-blue-500 hover:underline ml-2 mr-2"
                            rel="noopener noreferrer"
                        >
                            Group Carpool
                        </a>
                        page for more information.
                    </p>
                </div>
            </section>
        </main>
    );
}
