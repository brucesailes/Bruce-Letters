import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter'; // Import gray-matter
import React from 'react';
import Letter from '../components/Letter';

interface Post {
  content: string;
  slug: string;
  title: string;
  date: string;

}

export default function LettersPage({ posts = [] }: { posts?: Post[] }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">The Letters to Mankind</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Letter key={index} post={post} />
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

      // Parse the file content using gray-matter
      const matterResult = matter(fileContent);

      return {
        content: matterResult.content,
        slug: filename.replace('.md', ''), // Remove the .md file extension from the slug
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || 'Date', 
      };
    })
  );

  return {
    props: {
      posts,
    },
  };
}

