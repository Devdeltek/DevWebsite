import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Devin Delaney's
            <br className="hidden lg:inline-block" />
            Portfolio Site.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi, I'm Devin Delaney. I am studying Software Engineering at California State University Monterey Bay. Thanks for checking out my site, you can find my personal projects and contact information hosted here!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-green-100 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black bg-violet-200 border-0 py-2 px-6 focus:outline-none hover:bg-violet-400 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="./coding.svg"/>
        </div>
      </div>
    </section>
  );
}