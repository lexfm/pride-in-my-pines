import React, { useState } from 'react';

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    positions: [] as string[],
  });

  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // ✅ Added this state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000); // Auto-hide after 3 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        showToast('success', '✅ Form submitted successfully!');
        setFormSubmitted(true); // ✅ Hide form and show success message
      } else {
        showToast('error', '❌ Failed to submit the form.');
      }
    } catch (error) {
      showToast('error', '❌ An unexpected error occurred.');
    }
  };

  const positions = [
    'Breakdown Committee',
    'Cooking Committee',
    'Decoration Committee',
    'Security Team',
    'Setup Committee',
    'Activity Leadership',
  ];

  return (
    <div className="relative">
      {/* ✅ Toast */}
      {toast && (
        <div
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

      {/* ✅ Success Message or Form */}
      {formSubmitted ? (
        <div className="max-w-2xl mx-auto bg-green-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you for volunteering! 🎉</h2>
          <p className="text-lg">We appreciate your willingness to help. Our team will contact you soon!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 border border-gray-700 text-gray-100"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Volunteer Form</h2>
          <p className="text-center text-gray-300 mb-6">
            Become a volunteer and get 20% off! (Limited amount of volunteers)
          </p>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-1">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-1">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-300 font-medium mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 ease-in-out"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Volunteering Positions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positions.map((position) => (
                <label key={position} className="flex items-center space-x-2 text-gray-200">
                  <input
                    type="checkbox"
                    value={position}
                    onChange={handleCheckboxChange}
                    checked={formData.positions.includes(position)}
                    className="accent-green-500 transition duration-300 ease-in-out"
                  />
                  <span>{position}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VolunteerForm;
