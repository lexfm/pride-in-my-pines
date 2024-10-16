
import Image from "next/image";

export default function EarlyBird() {
    return (
        <main className="earlybird-section flex flex-col gap-4 row-start-2 items-center items-start">

            <h3 className="text-2xl font-extrabold dark:text-white text-center">""The Magic Continues: Early Bird Adventure – May 2025!"🌈👥 </h3>
            <Image
                aria-hidden
                src="/earlyBirdMay25.png"
                alt="EarlyBird"
                width={700}
                height={700}
            />
            <div className="text-gray-400 text-xl leading-relaxed space-y-4 mt-5">

                <p>
                    Don’t miss out on the next unforgettable adventure! Join us for another weekend of fun, freedom, and friendship under the stars. Book early to lock in your spot for the last weekend of May 2025. Early bird tickets are flying away fast—snag yours now and get ready for the next chapter of magic! 🌈✨
                </p>
            </div>

        </main>
    );
}
