import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <header className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-wide text-primary">About Me</h1>
      </header> */}
      <div class="text-black sm:p-6">
        <div class="bg-white rounded-md ">
          {/* <!-- Header Section --> */}
          <div class="bg-gray items-center p-4 relative rounded-t-md">
            {/* <!-- Dots (Similar to Traffic Lights) --> */}
            <div class="flex space-x-2 absolute left-4">
              <span class="w-4 h-4 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
              <span class="w-4 h-4 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
              <span class="w-4 h-4 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
            </div>
            {/* <!-- Executing File --> */}
            <div class="flex-grow text-center">
              <p class="text-sm text-gray-200">Executing: <span class="text-gray-200">introduceSelf.js</span></p>
            </div>
          </div>

          {/* <!-- Content Section --> */}
          <div class="mt-6 space-y-4 px-10 pt-3 pb-10">
            {/* <!-- First Line --> */}
            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.learnAboutMe()</p>
                <p class="text-gray-400 text-sm ml-2">Press enter to see what I am about</p>
              </div>
            </div>

            {/* <!-- Other Lines --> */}
          
            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.location()</p>
                <p class="text-gray-400 text-sm ml-2">Philadelphia, PA, USA</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.experience()</p>
                <p class="text-gray-400 text-sm ml-2">["One Community Global - Software Developer", "Drexel University - Technical Specialist"]</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.interests()</p>
                <p class="text-gray-400 text-sm ml-2">["Software Development", "Front-end Development", "Full-stack Development"]</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.education()</p>
                <p class="text-gray-400 text-sm ml-2">["MS in Computer Science - Drexel University", "BE in Computer Science - K. J. Somaiya College of Engineering"]</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.languages()</p>
                <p class="text-gray-400 text-sm ml-2">["Python", "Java", "JavaScript", "React", "C", "C++" "Docker", "RESTful APIs", "SQL", "git"]</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-black mr-2">&gt;</div>
              <div>
                <p>self.connect()</p>
                <p class="text-gray-400 text-sm ml-2">
                  [ 
                  "<a href="https://www.linkedin.com/in/shreya-laheri/" class="text-blue-400 font-medium" target="_blank" rel="noopener">LinkedIn</a>", 
                  "<a href="https://github.com/ShreyaLaheri" class="text-blue-400 font-medium" target="_blank" rel="noopener">Github</a>", 
                  "<a href="mailto:sl3798@drexel.edu" class="text-blue-400 font-medium" target="_blank" rel="noopener">Email</a>", 
                  ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About