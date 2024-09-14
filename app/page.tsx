import Image from "next/image";
import { Facebook, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="relative flex items-center justify-center min-h-48 max-h-48 md:max-h-64 lg:max-h-32 pimp-bg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Slight overlay */}
        <h1 className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-600 to-yellow-500 drop-shadow-2xl text-center">
          Pride in My Pines
        </h1>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center items-start">
        <Image
          aria-hidden
          src="/flyer.png"
          alt="File icon"
          width={700}
          height={700}
          unoptimized
        />
        <h2 className="text-4xl font-extrabold dark:text-white">More details coming soon!</h2>

        <div className="flex gap-6 items-center justify-center flex-wrap">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >
            Info
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
            target="_self"
            rel="noopener noreferrer"
          >
            Purchase
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/prideinmypines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/prideinmypines"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
          Facebook
        </a>

      </footer>
    </div>
  );
}
