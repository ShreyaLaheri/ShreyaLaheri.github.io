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
              <h3 className="text-lg font-semibold">Fidelity Investments - Full Stack Developer</h3>
              <p className="text-gray-500 text-sm">June 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Led the design and development of secure, highly interactive web applications using React.js, Node.js, and Flask, significantly improving user retention by 25% and reducing page load times by 37%, resulting in a more seamless user experience across platforms.</li>
                <li>Developed and optimized scalable RESTful APIs that streamlined communication between microservices, leading to decrease in service response time, enhancing overall system efficiency and ensuring consistency in user data.</li>
                <li>Utilized AWS services (EC2, S3, and Lambda) to automate infrastructure provisioning, reducing manual deployment time, while improving system scalability and reliability, particularly during peak usage.</li>
                <li>Designed and implemented intuitive, responsive, and accessible UI components using Tailwind CSS, improving user engagement on mobile devices by 32% and ensuring an optimized experience across different screen sizes.</li>
                <li>Built and maintained a robust CI/CD pipeline using GitHub Actions, enabling automated deployments and supporting bi-weekly releases with minimal rollbacks, reducing manual effort and speeding up delivery cycles.</li>
                <li>Enhanced database performance by optimizing complex SQL queries and restructuring data access patterns in MySQL and MongoDB, leading to a 42% improvement in query speed and ensuring smoother interaction with real-time data.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Ernst & Young - Front-End Developer</h3>
              <p className="text-gray-500 text-sm">June 2021 - July 2022</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Developed dynamic and user-centric web interfaces using React.js, JavaScript, HTML, and CSS, which increased internal tool efficiency by 18%, reducing time spent on repetitive tasks and improving overall team productivity.</li>
                <li>Collaborated closely with the UI/UX design team to translate Figma designs into functional, responsive layouts, maintaining a design-to-development match rate of 94%, and earning high praise from stakeholders for the clean, user-friendly interfaces.</li>
                <li>Integrated AJAX to enable real-time data fetching, improving user experience by providing instant updates without page reloads, leading to a 24% reduction in bounce rates and improved session durations.</li>
                <li>Implemented Material UI to build consistent, reusable components that matched design guidelines, making the UI development process smoother and more efficient.</li>
                <li>Leveraged GitLab for version control and CI/CD integration, automating testing and deployments to ensure smooth code collaboration and consistent staging-to-production pipelines.</li>
                <li>Actively worked on performance optimization initiatives, identifying and addressing front-end bottlenecks, reducing page load times and improving first contentful paint (FCP) by 1.5 seconds, resulting in a faster, more fluid experience for users.</li>
                <li>Actively participated in Agile sprint cycles, ensuring clear communication with cross-functional teams and contributing to timely delivery of user stories, leading to a 23% increase in sprint success rates and higher client satisfaction.</li>
              </ul>
            </div>

            <div className="pb-10">
              <h3 className="text-lg font-semibold">Space Up Technology - Web Developer</h3>
              <p className="text-gray-500 text-sm">July 2020 - May 2021</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Developed and optimized front-end features using React.js, which enhanced user engagement and significantly improved the overall user experience across the platform.</li>
                <li>Contributed to the design and development of Space Cloud, a Kubernetes-based serverless platform, which allowed clients to easily create real-time APIs, streamlining the process and improving the platform’s scalability.</li>
                <li>Mentored three junior developers, enhancing their front-end skills and contributing to a 24% increase in team productivity, as measured through project timelines and performance metrics.</li>
                <li>Led the optimization of SEO strategies across the blog platform, resulting in increase in organic search traffic and a notable improvement in user engagement and visibility.</li>
                <li>Designed and implemented responsive, mobile-friendly interfaces with React.js and Bootstrap, resulting in a 27% increase in user engagement and a 34% reduction in bounce rates, as measured through Google Analytics.</li>
                <li>Integrated RESTful APIs and GraphQL to facilitate smooth communication between the front-end and back-end systems, optimizing data flow and improving performance, ultimately leading to faster load times and a better user experience.</li>
                <li>Streamlined development and deployment processes by implementing Docker, which reduced deployment times by 37% and ensured consistent and reliable environments for both development and production releases.</li>
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
