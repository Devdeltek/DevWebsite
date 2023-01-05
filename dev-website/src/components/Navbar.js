import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-green-200 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black hover:text-blue-400 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Reed Barger
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l text-gray-800 md:border-gray-800	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-400">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-400">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-blue-400">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-purple-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0 text-black">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
