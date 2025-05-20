import React from "react";
import Profile from "../assets/profile.png";

const Home = () => {
  return (
    <div class="flex flex-col mt-6 lg:mt-8" id="home">
      <div class="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0 p-4">
        {/* <!-- Image Section --> */}
        {/* <div class="relative w-full md:w-auto md:basis-1/2 flex justify-center"> */}
          {/* <!-- Frame Offset --> */}
          {/* <div class="absolute -top-1 left-14 border-20 border-primary w-72 h-64 sm:h-64 md:h-72 lg:h-96 xl:h-[28rem] z-0"></div> */}
          {/* <!-- Image Offset --> */}
          {/* <div class="relative z-10 -translate-x-4 translate-y-8">
            <img
              src={Profile}
              alt="Profile photo"
              class="w-auto h-auto sm:h-64 md:h-64 lg:h-72 xl:h-[28rem] shadow-md"
            />
          </div> */}
        {/* </div> */}
        <div class="lg: mx-10">
          <img
                src={Profile}
                alt="Profile"
                class="w-auto max-h-100 h-auto sm:h-64 md:h-64 lg:h-72 xl:h-[28rem] shadow-lg rounded mt-8 mb-8"
              />
        </div>

        {/* <!-- Text Section --> */}
        <div class="w-full md:w-1/2 sm:text-center md:text-left flex flex-col justify-center p-3 lg:pl-10">
          <h2 class="text-3xl font-bold mb-4">Hello, I'm Shreya Laheri</h2>
          <p class="text-gray-600 mb-2">
            I am a results-driven <strong>Software Development Engineer</strong> with a keen focus on solving complex problems and building impactful digital experiences. Armed with a <strong>Master’s in Computer Science</strong> from Drexel University and a strong foundation in software engineering principles, I thrive at the intersection of innovation and functionality.
          </p>
          <p class="text-gray-600 mb-2">
            My professional journey spans <strong>software development, web development, and full-stack engineering</strong>, where I’ve developed robust applications and streamlined workflows that drive efficiency. I specialize in <strong>Python</strong>, <strong>Java</strong>, and <strong>React.js</strong>, leveraging these tools to create solutions that are not only technically sound but also user-centric.
          </p>
          <p class="text-gray-600">
            Explore my portfolio to see how I combine technical expertise with creative problem-solving. Let’s build something extraordinary together!
          </p>


          {/**Social Icons */ }
          <div className="flex space-x-8 mt-8">
            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/shreya-laheri/"
              aria-label="LinkedIn"
              className="text-black hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.5 0 53.8 0 24.1 24.1 0 53.79 0c29.69 0 53.79 24.1 53.79 53.8 0 29.7-24.09 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ShreyaLaheri"
              aria-label="GitHub"
              className="text-black hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:shreyalaheri67@gmail.com"
              aria-label="Email"
              className="text-black hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <title>Email</title>
                <path d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"></path>
                <path d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"></path>
                <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
