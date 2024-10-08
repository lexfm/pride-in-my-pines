/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-buy-button': any; // Define your custom element here
        }
    }
}


export default function Priviledged() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Simulate a 3s loading time
        return () => clearTimeout(timer); // Clean up timer
    }, []);

    return (
        <>
            <h3 className="text-2xl font-extrabold dark:text-white text-center">You're so lucky! – Grab Your Priviledged Weekend Pass While You Can!</h3>

            {loading ? (
                <div className="w-full flex flex-col justify-center items-center">
                    {/* Fun Queer Phrase */}
                    <p className="text-center text-lg font-bold text-orange-500 mb-2">
                        You're so lucky, Wait for your unique Weekend Pass!
                    </p>
                    {/* Halloween-themed Progress Bar */}
                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            ) : null}

            <div className="payments flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                {/* Full Weekend Button */}
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center text-gray-300 dark:text-gray-100 mb-2 text-lg">
                        Get the Full Experience (Lucky You!) – No Daylight Limits!
                    </p>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1PyMq92NINoc8Fp0NG3qtqKK"
                        publishable-key="pk_live_51PyKqx2NINoc8Fp0bNfrEkw8XieRB3bCfsizYgS2f4QWiOZErAcckGlYbgoMQ1uQFSnVftoR7Co6Nmv7QPRj6Xj600FPbBO0AR"
                    ></stripe-buy-button>
                </div>

                {/* Second button with descriptive text */}

            </div>

        </>
    );
}
