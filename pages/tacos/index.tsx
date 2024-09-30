
import Image from "next/image";

export default function Tacos() {
    return (
        <main className="taco-section flex flex-col gap-4 row-start-2 items-center items-start">


            <h3 className="text-2xl font-extrabold dark:text-white text-center">
                Had a long week? Let us handle dinner on Friday, October 18th! 🌮 From 6:30 to 8:30 PM, treat yourself to delicious birria tacos, quesadillas, aguas frescas, and more 😋 from the best taco truck in town:
                <a
                    href="https://www.instagram.com/lacocinadelabuelo.sd/?hl=en"
                    target="_blank"
                    className="text-blue-500 hover:underline ml-2 mr-2"
                    rel="noopener noreferrer"
                >
                    La Cocina del Abuelo
                </a>
            </h3>
            <Image
                aria-hidden
                src="/tacoMenu.png"
                alt="Taco Menu"
                width={700}
                height={700}
            />
        </main>
    );
}
