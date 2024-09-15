// components/Footer.tsx
import { Facebook, Instagram } from 'lucide-react'

const Footer = () => {
    return (
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
            <p>© 2024 Your Company. All Rights Reserved.</p>

        </footer>
    );
};

export default Footer;
