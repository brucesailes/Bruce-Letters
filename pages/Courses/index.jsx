import Head from 'next/head';
import { useState } from 'react';

export default function Courses() {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    return /@.*(gmail\.com|ymail\.com)$/.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    
    console.log('Attempting to subscribe with email:', email); 

    if (!validateEmail(email)) {
      console.log('Invalid email format for:', email); 
      alert('Please enter a valid email address from Gmail or Ymail.');
      return; // Stop the function if the email is invalid
    }

    const response = await fetch('/api/subscribe', { // Make sure the path is correct based on your project structure
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json(); // Assuming your API responds with JSON
    console.log('Server response:', result); // Log the server's response

    if (response.ok) {
      console.log('Subscription successful for email:', email); // Log on successful subscription
      alert('Thank you for subscribing!');
      setEmail('');
    } else {
      // Log and alert if the server responded with an error
      console.error('Error subscribing:', result.error);
      alert(result.error || 'Something went wrong, please try again.');
    }
  };

  // Example course categories, add or modify as needed
  const courseCategories = [
    { id: 1, name: 'Coding', description: 'Master the fundamentals of coding from scratch.', icon: '👨‍💻' },
    { id: 2, name: 'Digital Marketing', description: 'Learn the strategies to succeed in digital marketing.', icon: '📊' },
    { id: 3, name: 'Entrepreneurship', description: 'Turn your ideas into successful businesses.', icon: '💼' },
    // Add more categories as needed
  ];
  return (
    <div>
      <Head>
        <title>Empower Your Digital Journey</title>
        <meta name="description" content="Embark on your digital journey with our comprehensive courses in coding, digital marketing, entrepreneurship, website design, productivity, and AI." />
        <meta name="keywords" content="coding, digital marketing, entrepreneurship, website design, no-code, productivity, AI, online courses" />
        <meta property="og:title" content="Empower Your Digital Journey | Our Courses" />
        <meta property="og:description" content="Start your comprehensive digital education with our expertly designed courses tailored for modern digital professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen justify-center items-center bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Coming Soon...</h1>
        <h2 className="text-3xl font-bold mb-6">Empower Your Digital Journey</h2>
        <p className="text-xl mb-4">Your one-stop platform for learning web development, digital marketing, entrepreneurship, and more. 🚀</p>

        {/* Subscription Form Section */}
        <div className="w-full max-w-xs mx-auto mt-10">
          <form onSubmit={handleSubscribe} className="flex items-center border-b border-blue-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-5 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Join the waitlist..."
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}