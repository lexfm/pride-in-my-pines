import Image from "next/image";

export default function Intinerary() {
    return (
        <main className="intinerary-section flex flex-col gap-4 row-start-2 items-center items-start">

            <h3 className="text-2xl font-extrabold dark:text-white text-center">"The Ghosts, Gays, and Theys Outdoor Adventure" 👻🌈👥 </h3>

            <Image
                aria-hidden
                src="/intinerary.png"
                alt="Intinerary"
                width={700}
                height={800}
            />

        </main>
    );
}
