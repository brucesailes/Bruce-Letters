import React from "react";

export default function Footer() {
  return (
    <footer className="text-blue-600 py-4 text-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left">
          <ul className="flex space-x-4 text-sm lg:text-base">
            <li>
              <a
                href="https://www.youtube.com/@BruceSailes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bruce-sailes-6111022a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-right">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}



