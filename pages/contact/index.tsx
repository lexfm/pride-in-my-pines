import React from 'react';
import ContactForm from '../../components/contactForm';
import Link from 'next/link';

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-4 flex flex-col items-center gap-4 max-w-4xl">
            <p className="text-lg dark:text-white font-extrabold text-center max-w-2xl mb-4">
                Have questions about Pride in My Pines? Want to provide feedback or explore partnership opportunities? 
                We're here to help and would love to hear from you! 🌈
            </p>

            <ContactForm />

            <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
                bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400
                text-pink-500 font-bold
                gap-2 hover:bg-gradient-to-r hover:from-green-400 hover:via-yellow-300 hover:to-pink-400 
                text-lg sm:text-xl h-11 sm:h-16 px-2 sm:px-4 shadow-lg 
                dark:hover:text-pink-400 hover:scale-105 transform transition duration-300 ease-in-out"
                href="/"
                target="_self"
                rel="noopener noreferrer"
            >
                Back to Home
            </Link>
        </main>
    );
} 