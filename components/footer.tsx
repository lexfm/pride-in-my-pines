// components/Footer.tsx
import { Facebook, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        // <footer className="w-full flex gap-6 flex-wrap items-center justify-center bg-gray-900 text-gray-200 p-4 fixed bottom-0">
        <footer className="w-full fixed bottom-0 flex gap-6 flex-wrap items-center justify-center bg-gray-900 text-gray-200 p-4">
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
            <p>© 2024 P.I.M.P. All Rights Reserved.</p>

        </footer>
    );
};

export default Footer;
