// pages/index.tsx
import Link from 'next/link';
import Head from 'next/head'
import About from './About ';
import Contact from './Contact';
import Image from 'next/image';

interface Post {
  content: string;
  title: string;
  date: string;
}

export default function BlogPage({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Head>
      <title>Home</title> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto px-4">
      <div className="border border-gray-300 rounded-lg shadow-lg bg-white p-6 mb-8 transition-transform transform hover:scale-105">
        <p className="text-2xl font-bold text-center mb-8 text-blue-600">PRIOR TO YOUR JOURNEY</p>
        <p className="text-lg text-center text-gray-700 mb-8">Receive the newest edition of The Letters to Mankind directly in your inbox.</p>
        <p className="text-lg text-center text-gray-700 mb-8">Become part of a global community that&apos;s weekly enlightened by The Letters to Mankind. Discover insights on life, spiritual growth, and business acumen.</p>
        <div className="flex justify-center mb-8">
          <a href="https://theletterstomankind-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-700">Click to Subscribe</a>
        </div>
      </div>
        {/* Letters to Mankind Section */}
        <div className="bg-white p-4 rounded shadow-md mb-8 transition-transform transform hover:scale-105">
              <Image
                src='/Letters.png'
                alt="Letters to Mankind"
                width={200} // Set the width in pixels
                height={200} // Set the height in pixels
                className="rounded-full mx-auto mb-4"
              />
          <p>
            The &ldquo;Letters to Mankind&rdquo; is not just a blog; it&apos;s a source of daily inspiration and motivation for individuals who seek empowerment and guidance on their life journey. This blog is dedicated to those who hold a deep belief in God and recognize the significance of spiritual and personal growth. Here, you will find a collection of heartfelt letters, each written with the intention of uplifting and inspiring mankind.
          </p>
          <p>
            Our mission is to provide you with a daily dose of wisdom, encouragement, and spiritual insights that can help you navigate life&apos;s challenges and celebrate its triumphs. Whether you&apos;re seeking guidance in your career, relationships, or personal development, The &ldquo;Letters to Mankind&rdquo; offers a guiding light through the power of faith and inspiration.
          </p>
          <p>
            We understand that life can be demanding, and everyone needs a source of strength to lean on. Through our blog, we aim to be that unwavering support system, offering you not just words but a profound connection to your inner self and your faith. Join us on this transformative journey as we share these heartfelt letters with the hope that they will touch your soul, inspire positive change, and remind you of the boundless potential within you. Welcome to The &ldquo;Letters to Mankind&rdquo;  – where faith, inspiration, and empowerment converge to enrich your daily life.
          </p>

          {/* Button to navigate to "Letters to Mankind" page */}
          <div className="flex justify-center mb-8">
            <Link legacyBehavior href="/Blog">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-5 rounded-full transition-transform transform hover:scale-105">Read Letters
              </a>
            </Link>
          </div>
        </div>
           {/* About Component (Moved below "Letters to Mankind") */}
           <div className="bg-white p-4 rounded shadow-md mb-8 transition-transform transform hover:scale-105">
          <About />
        </div>
        {/* Contact Component */}
        <div className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105">
          <Contact />
        </div>
      </div>
    </div>
  );
}




