import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

interface LetterProps {
  post: {
    content: string;
    Title: string;
    Date: string;
    slug: string;
    Image: string;
  };
}

const Letter: React.FC<LetterProps> = ({ post }) => {
 

  return (
    <div className="bg-grey p-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
       {/* Render Image component only if post.Image is not empty */}
       {post.Image && (
         <div className="relative w-full h-80 flex justify-center items-center mb-2">
           <Image className="rounded-2xl" src={post.Image} alt={post.Title} width={250} height={250} />
         </div>
       )}
      <h1 className="text-gray-600 mb-2">{post.Title}</h1>
      <p className="text-gray-600 mb-2">{post.Date}</p>
      <Link legacyBehavior href={`/letters/${post.Title}`}>
        <a className="text-blue-500 hover:underline">Start Reading</a>
      </Link>
    </div>
  );
};

export default Letter;



