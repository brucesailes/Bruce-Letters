// pages/index.tsx
import Link from 'next/link';
import About from './about';
import Contact from '../pages/contact';
import Image from 'next/image';

interface Post {
  content: string;
  title: string;
  date: string;
}

export default function HomePage({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">

      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">&apos;Being prolific is not about quantity; it&apos;s about consistently delivering quality in abundance.&apos;</h2>

        {/* Letters to Mankind Section */}
        <div className="bg-white p-4 rounded shadow-md mb-8">
          <Link legacyBehavior href="/lettersPage">
            <a className="text-blue-600 hover:text-black-300">
              <Image
                src='/Letters.png'
                alt="Letters to Mankind"
                width={200} // Set the width in pixels
                height={200} // Set the height in pixels
                className="rounded-full mx-auto mb-4"
              />
            </a>
          </Link>
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
            <Link legacyBehavior href="/lettersPage">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">The
                Letters to Mankind
              </a>
            </Link>
          </div>
        </div>

        {/* About Component (Moved below "Letters to Mankind") */}
        <div className="bg-white p-4 rounded shadow-md mb-8">
          <About />
        </div>

        {/* Contact Component */}
        <div className="bg-white p-4 rounded shadow-md">
          <Contact />
        </div>
      </div>
    </div>
  );
}




