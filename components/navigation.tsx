import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link legacyBehavior href="/lettersPage">
            <a className="text-blue-600 hover:text-black-300">
              <Image
                src="/Letters.png"
                alt="Logo"
                width={100} // Set the width in pixels
                height={70} // Set the height in pixels
                className="mr-2" // Adjust the margin for spacing
              />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-sm xl:text-base">
          <li>
            <Link legacyBehavior href="/">
              <a className="text-blue-600 hover:text-black-300">Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/lettersPage">
              <a className="text-blue-600 hover:text-black-300">Letters</a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              href="https://theletterstomankind-newsletter.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="text-blue-600 hover:text-black-300">NewsLetter</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
