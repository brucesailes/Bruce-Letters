import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navigations () {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-4 ${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-10' : ''}`}>
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-4 text-sm xl:text-base">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-blue-600">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Blog" legacyBehavior>
              <a className="text-blue-600">Letters</a>
            </Link>
          </li>
          <li>
            <Link href="/Courses" legacyBehavior>
              <a className="text-blue-600">Courses</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
