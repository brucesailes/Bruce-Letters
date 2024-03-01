import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import Letter from '../components/Letter'; 


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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 transition-transform transform hover:scale-105">The Letters to Mankind</h1>
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


