import React, { useState } from 'react';

interface FormData {
    name: string;
    dob: string;
    phone: string;
    email: string;
    address: string;
    positions: string[];
    website?: string; // Honeypot field
    consent: boolean;
}

interface Toast {
    type: 'success' | 'error';
    message: string;
}

const VolunteerForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        dob: '',
        phone: '',
        email: '',
        address: '',
        positions: [],
        consent: false,
    });

    const positionDescriptions: Record<string, string> = {
        'Breakdown Committee': 'Assist with event teardown and cleanup.',
        'Cooking Committee': 'Help prepare and serve food to attendees.',
        'Decoration Committee': 'Set up decorations and beautify the event space.',
        'Security Team': 'Help ensure everyones safety during the event.',
        'Setup Committee': 'Assist with setup and logistics before the event starts.',
        'Activity Leadership': 'Lead games, workshops, or activities for attendees.',
    };

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [toast, setToast] = useState<Toast | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' && name === 'consent' ? checked : value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            positions: checked
                ? [...prev.positions, value]
                : prev.positions.filter((position) => position !== value),
        }));
    };

    const validateForm = () => {
        const phoneRegex = /^[0-9\-\+\s\(\)]{7,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setToast({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }
        if (!phoneRegex.test(formData.phone)) {
            setToast({ type: 'error', message: 'Please enter a valid phone number.' });
            return false;
        }
        if (!formData.consent) {
            setToast({ type: 'error', message: 'You must agree to be contacted.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        if ((formData as FormData).website) {
            // If bot filled the honeypot field, silently stop processing.
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setFormSubmitted(true);
                setToast({ type: 'success', message: 'Thank you for volunteering! We will contact you soon.' });
                // Auto-clear form
                setFormData({
                    name: '',
                    dob: '',
                    phone: '',
                    email: '',
                    address: '',
                    positions: [],
                    consent: false,
                });
            } else {
                setToast({ type: 'error', message: result.message || 'Failed to submit the form.' });
            }
        } catch {
            setToast({ type: 'error', message: 'There was an unexpected error submitting the form.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const positions = [
        'Setup Committee',
        'Breakdown Committee',
        'Decoration Committee',
        'Cooking Committee',
        'Activity Leadership',
        'Security Team',
    ];

    return (
        <div className="relative">
            {/* Toast */}
            {toast && (
                <div
                    role="alert"
                    aria-live="polite"
                    className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out
          ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
                >
                    <div className="flex items-center justify-between space-x-4">
                        <span>{toast.message}</span>
                        <button onClick={() => setToast(null)} className="text-white font-bold hover:text-gray-200 transition">
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Success Message or Form */}
            {formSubmitted ? (
                <div className="max-w-2xl mx-auto bg-green-700 text-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Thank you for volunteering! 🎉</h2>
                    <p className="text-lg mt-4"> A confirmation message has been sent to the provided email. [Please make sure to check your Spam/Junk folder!] </p>
                    <p className="text-lg">We appreciate your willingness to help. Our team will contact you soon!</p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 border border-gray-700 text-gray-900"
                >
                    <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Volunteer Form</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Become a volunteer and get 20% off! (Limited amount of volunteers)
                    </p>

                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex-1">
                                <label htmlFor="name" className="block text-gray-100 font-medium mb-1">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="dob" className="block text-gray-100 font-medium mb-1">Date of Birth:</label>
                                <input
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex-1">
                                <label htmlFor="phone" className="block text-gray-100 font-medium mb-1">Phone Number:</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-gray-100 font-medium mb-1">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-gray-100 font-medium mb-1">Address:</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-100 mb-4">Volunteering Positions:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {positions.map((position) => (
                                <label key={position} className="relative flex items-center space-x-2 text-gray-100 group">
                                    <input
                                        type="checkbox"
                                        value={position}
                                        onChange={handleCheckboxChange}
                                        checked={formData.positions.includes(position)}
                                        className="accent-green-500 transition duration-300 ease-in-out"
                                    />
                                    <span>{position}</span>
                                    <div
                                        className="absolute left-8 top-6 z-10 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg w-max"
                                    >
                                        {positionDescriptions[position]}
                                    </div>
                                </label>
                            ))}
                        </div>

                    </div>

                    {/* Consent Checkbox */}
                    <div className="mt-6">
                        <label className="flex items-center space-x-2 text-gray-100">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="accent-green-500"
                            />
                            <span>I agree to be contacted by the Pride in My Pines committee regarding my volunteer submission.</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                } bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 ease-in-out`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    {/* Honeypot Field */}
                    <input
                        type="text"
                        name="website"
                        className="hidden"
                        autoComplete="off"
                    />
                </form>
            )}
        </div>
    );
};

export default VolunteerForm;
