export default function Contribute() {
    return (
        <main className="contribute-section">

            <section className="w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto">

                <h3 className="text-2xl font-extrabold dark:text-white text-center">  Help Keep the Magic Alive! 👻🌈👥 </h3>

                <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">

                    <p>
                        Our amazing committee has invested their time, talents, and resources to make this weekend unforgettable. If you’d like to support and ensure we keep creating these magical experiences, please consider making a donation. Every little bit helps!
                    </p>

                    <div className="payments flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">

                        <div className="text-center">
                            <a
                                href="https://buy.stripe.com/9AQ9EvfFnaEob7yeUY"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-gradient-to-r from-orange-500 via-purple-700 to-black text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:via-black hover:to-orange-500 transition-colors duration-300 ease-in-out"
                            >
                                Donations ❤️🌈
                            </a>
                        </div>
                    </div>

                    <p>Thank you for your generosity!</p>

                    <p>"The Ghosts, Gays and They’s Camping Adventure" by Pride In My Pines</p>

                </div>

            </section>

        </main>
    );
}
