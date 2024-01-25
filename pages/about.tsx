import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="">
        <Image
          src='/bruce.png'
          alt="Bruce Sailes"
          width={200} // Set the width in pixels
          height={200} // Set the height in pixels
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-center text-3xl font-bold mb-2 text-blue-600">Meet Bruce Sailes</h1>
        <p className="text-center text-gray-700 text-lg mb-4">Developer | Creator | Artist | Writer</p>
        <p className="text-gray-600">
          Welcome to my world! I&ldquo;m Bruce Sailes, a versatile web developer, creative thinker, passionate artist, and wordsmith. With a passion for technology and a creative soul, I craft websites, create art, and write to inspire and empower others.
        </p>
        <p className="text-gray-600">
          My journey is all about blending the beauty of art and the precision of code to make the digital world more engaging and meaningful. Join me as we explore the realms of creativity and technology on this exciting journey!
        </p>
      </div>
    </div>
  );
}

