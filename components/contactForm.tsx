import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    website?: string; // Honeypot field
}

interface Toast {
    type: 'success' | 'error';
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [toast, setToast] = useState<Toast | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setToast({ type: 'error', message: 'Please enter a valid email address.' });
            return false;
        }
        if (formData.message.trim().length < 10) {
            setToast({ type: 'error', message: 'Please enter a message with at least 10 characters.' });
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
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setFormSubmitted(true);
                setToast({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
                // Auto-clear form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
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
                <div className="max-w-2xl mx-auto bg-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Thank you for your message! 🎉</h2>
                    <p className="text-lg mt-4">
                        We have received your inquiry and will get back to you as soon as possible.
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 border border-gray-700 text-gray-900"
                >
                    <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">Contact Us</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Have questions, feedback, or just want to say hello? We'd love to hear from you!
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
                            <label htmlFor="subject" className="block text-gray-100 font-medium mb-1">Subject:</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                            >
                                <option value="">Select a subject</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Partnership">Partnership Opportunity</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-100 font-medium mb-1">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                                placeholder="Please enter your message here..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${
                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            } bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default ContactForm; 