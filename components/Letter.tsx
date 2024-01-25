import React from 'react';
import Link from 'next/link';

interface LetterProps {
  post: {
    content: string;
    title: string;
    date: string;
    slug: string; 
  };
}

const Letter: React.FC<LetterProps> = ({ post }) => {
  const teaser = post.content.substring(0, 200); // Display the first 200 characters as a teaser

  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.date}</p>
      <p className="mb-4">{teaser}...</p>
      <Link legacyBehavior href={`/letters/${post.slug}`}>
        <a className="text-blue-500 hover:underline">Read More</a>
      </Link>
    </div>
  );
};

export default Letter;

