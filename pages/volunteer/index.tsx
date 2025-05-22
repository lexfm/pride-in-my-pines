
import Link from 'next/link';
import { useState } from 'react';
import VolunteerForm from '@/components/volunteerForm';

export default function Volunteer() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        // Logic to handle form submission
        setFormSubmitted(true);
    };

    return (
        <main className="volunteer-section flex flex-col gap-4 row-start-2 items-center items-start">
            <h3 className="text-2xl font-extrabold dark:text-white text-center max-w-2xl">
                Be part of the experience! Volunteer and enjoy contributing while creating lasting friendships with fellow campers and the Pride in My Pines team. 🌲🌈
            </h3>
            <VolunteerForm onSubmit={handleFormSubmit} />
            {formSubmitted && (
                <Link
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
                bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400
                text-pink-500
                gap-2 hover:bg-gradient-to-r hover:from-pink-400 hover:via-yellow-300 hover:to-green-400 
                text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
                dark:hover:text-yellow-500 hover:scale-105 transform transition duration-300 ease-in-out"
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                    Back to Main Page
                </Link>
            )}

            {!formSubmitted && (
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
            )}
        </main>
    );
}

