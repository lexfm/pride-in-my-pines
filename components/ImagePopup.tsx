import { useState } from 'react';
import Image from 'next/image';

interface ImagePopupProps {
    src: string;
    alt: string;
    linkText: string;
}

export default function ImagePopup({ src, alt, linkText }: ImagePopupProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-pink-500 hover:text-pink-400 underline text-lg font-bold"
            >
                {linkText}
            </button>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className="relative w-full h-full md:max-w-4xl md:h-auto md:aspect-[4/3]"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 md:-top-10 md:right-0 text-white hover:text-pink-400 text-3xl z-10"
                        >
                            ✕
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 