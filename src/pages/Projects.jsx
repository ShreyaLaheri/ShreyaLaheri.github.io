import React from "react";
import spaceCloudImg from "../assets/space-cloud.png";
import blogImg from "../assets/blog.png";
import farmingImg from "../assets/farming.png";
import skateboardImg from "../assets/skateboard.png";

const projects = [
  {
    title: "Space Cloud",
    description:
      "Designed and developed the Admin UI for Space Cloud, an open-source Kubernetes-based platform. Collaborated on UI/UX design and completed 70% of the front-end development. Key tools: real-time GraphQL/REST APIs, serverless functionality, and seamless database integration for scalable cloud-native applications.",
    tags: ["UI/UX", "React.js", "Open Source", "API Integration"],
    links: [
      { label: "Figma", url: "https://www.figma.com/proto/PU9YT6sl48CP3AgNrVKicQ1s/Admin-UI?node-id=32-2&t=PoFIrF9EU8TqtBe5-1" },
      { label: "GitHub", url: "https://github.com/spacecloud-io/space-cloud" },
    ],
    image: spaceCloudImg,
  },
  {
    title: "Mobile App Development",
    description:
      "Collaborated with the development team to enhance mobile apps for a skateboard and e-bike rental service, focusing on UI/UX improvements. Conducted project milestones and backend infrastructure testing, providing feedback that increased app adoption and rental revenue by 20%.",
    tags: ["App Development", "Project Management"],
    links: [{ label: "App Video", url: "https://www.youtube.com/watch?v=TTinUS8fk9E" }],
    image: skateboardImg,
  },
  {
    title: "Travel Blogging Platform",
    description:
      "Developed a blogging platform where users could share experiences, leave comments, create travel blogs, and sign up for a bi-weekly newsletter featuring top destinations. Features include social logins, secure authentication, and blog storage using a SQL database.",
    tags: ["HTML", "CSS", "Bootstrap", "React.js", "Flask", "SQL"],
    links: [{ label: "Figma", url: "https://www.figma.com/proto/7nzqixlHY7kYhbtPtGpq6p/CS-530-Blog-Website?node-id=0-1&t=HHCU25XAt0VFoHnN-1" }],
    image: blogImg,
  },
  {
    title: "Smart Farming",
    description:
      "Smart Farming is a farm automation system using Arduino, GSM, and sensors to monitor temperature, humidity, and soil moisture. The system automates daily/monthly reports for farmers while providing real-time data visualization for monitoring.",
    tags: ["Arduino", "IoT", "HTML", "CSS", "React.js", "Figma"],
    links: [{ label: "Figma", url: "https://www.figma.com/proto/8tkBWLjJJfwxdcJjGJxIT6/Smart-Farming-Web-App?node-id=0-1&t=Z2gNLQFUxffRNAGU-1" }],
    image: farmingImg, 
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-lightest mx-4 lg:mx-16" id="projects">
      <div> 
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-wide uppercase text-gray-800">P r o j e c t s</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
