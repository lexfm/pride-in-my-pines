
import Image from "next/image";

export default function ToBring() {
    return (
        <main className="to-bring-section flex flex-col gap-4 row-start-2 items-center items-start">
            <Image
                aria-hidden
                src="/toBring.png"
                alt="To Bring"
                width={700}
                height={900}
            />
        </main>
    );
}
