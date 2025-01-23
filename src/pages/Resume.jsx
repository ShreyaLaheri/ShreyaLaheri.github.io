import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Resume = () => {
  return (
    <div className="bg-white p-6 mx-4 lg:mx-12 rounded-md" id="resume">
      {/* Header */}
      <header className="mb-8">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold tracking-wide uppercase text-primary">R  e  s  u  m  e</h1>
          <a
            href="/path-to-resume.pdf" 
            download="Resume.pdf"
            className="ml-4 text-gray-500 hover:text-black flex "
            title="Download Resume"
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
          </a>
        </div>
      </header>

      {/* Sections */}
      <main className="mx-auto">
        {/* Education Section */}
        <section id="education" className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold">Master’s in Computer Science</h4>
              <h6 className="text-gray-600">Drexel University, 2024</h6>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Bachelor’s in Electronics Engineering</h4>
              <h6 className="text-gray-600">K. J. Somaiya College of Engineering, 2022</h6>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">One Community Global - Software Developer</h3>
              <p className="text-gray-500 text-sm">October 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Contributing with the development team for Phase 3 by mapping project requirements to features.</li>
                <li>Conducting code reviews and collaborating with the UI/UX team on Figma designs.</li>
                <li>Rapidly familiarizing myself with the codebase and adding development features on React.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Drexel University - Technical Specialist</h3>
              <p className="text-gray-500 text-sm">March 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Developed automated tools to streamline IRB protocol review processes.</li>
                <li>Architected an online Smartsheet-based system to improve data integrity and efficiency.</li>
                <li>Designed and implemented secure database systems with encryption and access controls.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Ernst & Young - SAP Analyst</h3>
              <p className="text-gray-500 text-sm">March 2022 - July 2022</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Created data sets and demo models using SAP Analytics Cloud.</li>
                <li>Handled data cleaning, validation, and identified key performance metrics.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Space Up Technology - Web Developer</h3>
              <p className="text-gray-500 text-sm">December 2017 - August 2019</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Increased user engagement by 30% by designing and building a user‑friendly website UI/UX with HTML5, CSS3, and React.js, leading to a
                significant bounce rate reduction</li>
                <li>Collaborated with backend developers on GitLab to design and implement the front‑end for Space Cloud, a Kubernetes‑based serverless
                platform enabling real‑time API creation on various databases</li>
                <li>Mentored junior developers in front‑end development by providing guidance and assigning tasks accelerating their learning curve</li>
                <li>Developed and deployed Space Cloud’s blog and a learn app using full‑stack technologies to showcase features and tutorials, leading to
                increased user engagement with the platform</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
