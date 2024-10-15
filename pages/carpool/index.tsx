import Image from "next/image";


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
            <section className="gear-section pt-4">

                <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

                    <h3 className="text-2xl font-extrabold dark:text-white text-center"> Do you need Gear?</h3>

                    <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">

                        <p>
                            If anyone wants to rent camping gear, please check out REI Rentals.
                        </p>

                        <p>Here is the link to find the local REI rental to you:
                            <a
                                href="https://www.rei.com/stores/rentals?srsltid=AfmBOoq8JDf94-XUZIWGWrhwQhkByyq1O8BQDARksMjdOdRZuPlhucje&fbclid=IwZXh0bgNhZW0CMTAAAR2H6knPK9yeyRtdqKsVHS3vPTkDUEmwqT5wVpxQySntZzhaClgckHtVq5I_aem_QN4flhHERlnr7_-r0OEQ0Q#locations"
                                target="_blank"
                                className="text-blue-500 hover:underline ml-2 mr-2"
                                rel="noopener noreferrer"
                            >
                                REI Rentals
                            </a>
                        </p>
                        <p>
                            We pulled the following information from the San Diego location. Each package is based on 2 day rental for one person. Of course, if you are planning for two people,costs would be different:
                        </p>
                    </div>
                    <div className="payments flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">


                        <div className="flex flex-col items-center justify-center">
                            Simple Option:
                            <Image
                                aria-hidden
                                src="/rentals/simple.png"
                                alt="Taco Menu"
                                width={400}
                                height={400}
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            Deluxe Option:
                            <Image
                                aria-hidden
                                src="/rentals/deluxe.png"
                                alt="Taco Menu"
                                width={400}
                                height={400}
                            />
                        </div>

                    </div>
                </section>

            </section>
        </main>
    );
}
