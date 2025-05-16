import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Food() {
    const [activeTab, setActiveTab] = useState<'friday' | 'saturday'>('friday');

    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center gap-8 max-w-4xl">
                <h3 className="text-lg font-extrabold dark:text-white text-center leading-relaxed">
                For the first time dinning options will be provided the full weekend!👀 La Cocina del Abuelo got you covered!🌮🍔 From delicious birria tacos, quesadillas, and more for Friday night to cheeseburgers, hot dogs, and nachos for Saturday night!
                <br className="my-4" />
                <span className="block mt-4 text-md font-normal">
                    Feel free to check out our friends media for more information on the best food truck in town:
                    <a
                        href="https://www.instagram.com/lacocinadelabuelo.sd/?hl=en"
                        target="_blank"
                        className="inline-block text-blue-600 hover:text-blue-800 hover:underline mx-2 transition-colors duration-200"
                        rel="noopener noreferrer"
                    >
                        La Cocina del Abuelo
                    </a>
                </span>
            </h3>

            {/* Mobile Tabs */}
            <div className="w-full md:hidden">
                <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                    <button
                        onClick={() => setActiveTab('friday')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
                            ${activeTab === 'friday'
                                ? 'bg-pink-600 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                            }`}
                    >
                        <span className="text-lg">Friday Menu</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('saturday')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200
                            ${activeTab === 'saturday'
                                ? 'bg-pink-600 text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                            }`}
                    >
                        <span className="text-lg">Saturday Menu</span>
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 'friday' && (
                        <div className="p-4">
                            <Image
                                aria-hidden
                                src="/food/friday25.png"
                                alt="Friday Night Food"
                                width={700}
                                height={700}
                                className="rounded-lg"
                            />
                        </div>

                    )}
                    {activeTab === 'saturday' && (
 
                            <div className="p-4">
                                <Image
                                    aria-hidden
                                    src="/food/saturday25.png"
                                    alt="Saturday Night Food"
                                    width={700}
                                    height={700}
                                    className="rounded-lg"
                                />
                            </div>
                        
                    )}
                </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 w-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 bg-pink-600 dark:bg-pink-700">
                        <h4 className="text-xl font-bold text-white text-center">Friday Menu</h4>
                    </div>
                    <div className="p-4">
                        <Image
                            aria-hidden
                            src="/food/friday25.png"
                            alt="Friday Night Food"
                            width={700}
                            height={700}
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 bg-pink-600 dark:bg-pink-700">
                        <h4 className="text-xl font-bold text-white text-center">Saturday Menu</h4>
                    </div>
                    <div className="p-4">
                        <Image
                            aria-hidden
                            src="/food/saturday25.png"
                            alt="Saturday Night Food"
                            width={700}
                            height={700}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>

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
