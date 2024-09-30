import Image from "next/image";

export default function Gear() {
    return (
        <main className="gear-section">

            <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

                <h3 className="text-2xl font-extrabold dark:text-white text-center"> Do you need Gear "The Ghosts, Gays, and Theys Outdoor Adventure" 👻🌈👥 ?</h3>

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

        </main>
    );
}
