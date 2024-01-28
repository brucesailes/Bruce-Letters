import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="">
        <Image
          src='/image/bruce.png'
          alt="Bruce Sailes"
          width={200} // Set the width in pixels
          height={200} // Set the height in pixels
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-center text-3xl font-bold mb-2 text-blue-600">Meet Bruce Sailes</h1>
        <p className="text-center text-gray-700 text-lg mb-4">Developer | Creator | Artist | Writer</p>
        <p className="text-gray-600">
          Greetings, and welcome to my realm! I am Bruce Sailes, a versatile web developer, a visionary creative, a passionate artist, and a wordsmith. Fueled by my love for technology and guided by my creative spirit, I specialize in crafting websites, producing captivating art, and composing inspirational content, all with the aim of igniting inspiration and empowering individuals like yourself.
        </p>
        <p className="text-gray-600">
          My journey is all about blending the beauty of art and the precision of code to make the digital world more engaging and meaningful. Join me as we explore the realms of creativity and technology on this exciting journey!
        </p>
      </div>
    </div>
  );
}

