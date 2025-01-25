import React, { useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Shreya_Resume from '../assets/resume.pdf'

const Resume = () => {
  useEffect(() => {
    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      bar.style.width = "0%"; 
      setTimeout(() => {
        bar.style.transition = "width 1.5s ease-in-out";
        bar.style.width = percentage;
      }, 100);
    });
  }, []);

  const skills = [
    { name: "Python", percentage: "90%" },
    { name: "Java", percentage: "85%" },
    { name: "SQL", percentage: "88%" },
    { name: "C/C++", percentage: "75%" },
    { name: "Git", percentage: "85%" },
    { name: "Docker", percentage: "80%" },
    { name: "Numpy", percentage: "90%" },
    { name: "Pandas", percentage: "88%" },
    { name: "Tensor Flow", percentage: "80%" },
    { name: "Flask", percentage: "85%" },
    { name: "React.js", percentage: "88%" },
    { name: "Node.js", percentage: "80%" },
    { name: "MaterialUI", percentage: "85%" },
    { name: "Tailwind CSS", percentage: "90%" },
    { name: "MySQL", percentage: "88%" },
    { name: "SQLite3", percentage: "80%" }
  ];


  return (
    <div className="bg-white p-6 mx-4 lg:mx-16 rounded-md" id="resume">
      {/* Header */}
      <header className="mb-8">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold tracking-wide uppercase text-primary">R  e  s  u  m  e</h1>
          <a
            href={Shreya_Resume} 
            download="Shreya_Resume.pdf"
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
                <li>Led the successful implementation of Phase 3 by analyzing project requirements, mapping them to features, and collaborating with the UI/UX
                team to design and deploy user‑friendly interfaces on GitHub, accelerating the project timeline by 15%</li>
                <li>Reviewed and tested 50+ pull requests, identifying and resolving critical bugs to reduce defects by 10%, while maintaining code quality through
                adherence to TDD and SOLID principles</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Drexel University - Technical Specialist</h3>
              <p className="text-gray-500 text-sm">March 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Implemented a Smartsheet‑based conflict‑of‑interest management system, improving data integrity by 30%, boosting efficiency by 50%, and
                reducing review time by 50%, with enhanced security and compliance through encryption and role‑based access controls</li>
                <li>Contributed to the technical evaluation of COEUS replacement options, analyzing API integration and scalability, and driving the adoption of a
                modern research management software to replace a 15‑year‑old system, setting new benchmarks for efficiency and innovation</li>
                <li>Designed and deployed automated tools to streamline IRB protocol review, reducing processing time by 20% while ensuring consistent ethical
                standards and regulatory compliance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Ernst & Young - SAP Analyst</h3>
              <p className="text-gray-500 text-sm">March 2022 - July 2022</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Designed and optimized datasets in SAP Analytics Cloud (SAC) by cleansing, validating, and transforming raw data into accurate and reliable formats, leading to a 30% improvement in reporting efficiency and data usability</li>
                <li>Developed interactive dashboards and story reports by identifying and implementing key performance indicators (KPIs), enabling stakeholders to access real-time business insights and make informed decisions with greater confidence</li>
                <li>Automated data pipelines and seamlessly integrated multiple data sources into SAC, reducing data processing time by 25% and enhancing the overall functionality and performance of the analytics platform</li>
              </ul>
            </div>

            <div className="pb-10">
              <h3 className="text-lg font-semibold">Space Up Technology - Web Developer</h3>
              <p className="text-gray-500 text-sm">December 2017 - August 2019</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Boosted user engagement by 30% by crafting and implementing a responsive website UI/UX with React.js, significantly reducing bounce rates</li>
                <li>Partnered with backend developers on GitLab to create the front‑end for Space Cloud, a Kubernetes‑based serverless platform enabling real‑time
                API creation on multiple databases</li>
                <li>Mentored 3 junior developers, enhancing their front‑end skills through tailored feedback and targeted tasks</li>
                <li>Optimized SEO strategies across the blog platform, increasing organic search traffic by 60% and enhancing interaction with educational content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-700">{skill.percentage}</span>
                </div>
                <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
                  <div
                    className="progress-bar bg-primary h-full"
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
