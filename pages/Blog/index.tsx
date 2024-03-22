import fs from 'fs/promises';
import Head from 'next/head';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import Letter from '../../components/Letter'; 


interface Post {
  content: string;
  slug: string;
  Title: string;
  Date: string;
}

export default function lettersPage({ posts = [] }: { posts?: Post[] }) {
  if (posts.length === 0) {
    return <div>No letters found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Head>
        <title>Letters to Mankind</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 transition-transform transform hover:scale-105">The Letters to Mankind</h1>
        <div className="border border-gray-300 rounded-lg shadow-lg bg-white p-6 mb-8 transition-transform transform hover:scale-105">
          <p className="text-2xl font-bold text-center mb-8 text-blue-600 transition-transform transform hover:scale-105">BEFORE YOU READ</p>
          <p className="text-lg text-center text-gray-700 mb-8">Get The Latest Issue Of The Letters to Mankind Sent Straight To Your Inbox</p>
          <p className="text-lg text-center text-gray-700 mb-8">Join the rest of the human race getting mindf*cked every week while reading The Letters to Mankind (you’ll learn a bit about life, spirituality & business too.)</p>
          <div className="flex justify-center mb-8">
            <a href="https://theletterstomankind-newsletter.beehiiv.com/subscribe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline hover:text-blue-700">Subscribe here</a>
          </div>
        </div>
        <div className="p-6 mb-8">
          <p className="text-lg text-center text-gray-700 mb-8">Embark on a Journey of Curiosity and Transformation</p>
          <p className="text-lg text-center text-gray-700 mb-8">Delve into profound discussions on human potential, lifestyle craftsmanship, and the art of entrepreneurship</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {posts.map((post) => (
            <Letter key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postFiles = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    postFiles.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { content, data } = matter(fileContent);

      return {
        content,
        slug: filename.replace('.md', ''),
        Title: data.Title || 'Untitled',
        Date: data.Date || 'No Date', 
      };
    })
  );

  // Optional: Sort posts by date
  posts.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

  return {
    props: {
      posts,
    },
  };
}


