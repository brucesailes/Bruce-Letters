import React from "react";
import { ReactElement } from "react";
import Image from "next/image";



export default function About(): ReactElement {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-3xl font-bold mb-2 text-blue-600">Who is Bruce Sailes?</h2>
      <div className="">
        <Image
          src='/bruce-revamp.png' 
          alt="Bruce Sailes"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <p className="text-center text-gray-700 text-lg mb-4">Developer | Creator | Artist | Writer</p>
        <p className="text-gray-600">
          Greetings, and welcome to my realm! I am Bruce Sailes, a versatile web developer, a visionary creative, a passionate artist, and a wordsmith. Fueled by my love for technology and guided by my creative spirit, I specialize in crafting websites, producing captivating art, and composing inspirational content, all with the aim of igniting inspiration and empowering individuals like yourself.
        </p>
        <p className="text-gray-600">
          My journey is all about blending the beauty of art and the precision of code to make the digital world more engaging and meaningful. Join me as we explore the realms of creativity and technology on this exciting journey!
        </p>

        <div className="flex justify-center space-x-6 mt-6">
          
          <a className="transition-transform transform hover:scale-105"  href="https://www.linkedin.com/in/brucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on LinkedIn">
            <Image src="/linkedin.svg" alt="LinkedIn"  width={50} height={50} />
          </a>

          <a className="transition-transform transform hover:scale-105"  href="https://www.youtube.com/@BruceSailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on YouTube">
            <Image src="/youtube.svg" alt="YouTube"  width={50} height={50} />
          </a>

          <a className="transition-transform transform hover:scale-105"  href="https://www.instagram.com/thebrucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on Instagram">
            <Image src="/instagram.svg" alt="YouTube"  width={50} height={60} />
          </a>

          <a className="transition-transform transform hover:scale-105" href="https://github.com/brucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on GitHub">
          <Image src="/github.svg" alt="GitHub"  width={50} height={50} />
          </a>

        </div>
        
      </div>
    </div>
  );
}

