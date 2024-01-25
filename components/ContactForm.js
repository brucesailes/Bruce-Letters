import React, { useState } from 'react';

export default function ContactForm() {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Simple regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        setSubmitStatus('success');
        setFormData(initialFormData); // Reset the form
        setEmailError(null); // Clear the email error
      } else {
        // Handle the error
        setSubmitStatus('error');
      }
    } catch (error) {
      // Handle network or other errors
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {submitStatus === 'success' && (
        <div className="mb-4 text-green-500 font-bold">Email sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-4 text-red-500 font-bold">Error sending email. Please try again.</div>
      )}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            emailError ? 'border-red-500' : 'focus:border-blue-500'
          }`}
        />
        {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
