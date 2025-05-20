import React, { useState, useEffect, useMemo } from "react";

const About = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Memoizing the content array to avoid it being a dependency in the useEffect hook
  const content = useMemo(() => [
    { command: "self.currentLocation()", output: `"Boston, MA, USA"` },
    {
      command: "self.experience()",
      output: `["Fidelity Investments - Full Stack Developer"]`,
    },
    {
      command: "self.interests()",
      output: `["Software Development", "Full-stack Development", "Front-end Development", "Web Development"]`,
    },
    {
      command: "self.education()",
      output: `["MS in Computer Science - Drexel University", "BTech in Computer Science - K. J. Somaiya College of Engineering"]`,
    },
    {
      command: "self.skills()",
      output: `["Python", "Java", "JavaScript", "React", "C", "C++", "Docker", "RESTful APIs", "SQL", "git"]`,
    },
    {
      command: "self.contactMe()",
      output: `<a href="https://www.linkedin.com/in/shreya-laheri" class="text-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/ShreyaLaheri" class="text-primary" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="mailto:shreyalaheri67@gmail.com" class="text-primary" target="_blank" rel="noopener noreferrer">Email</a>`,
    },
  ], []);

  const handleTapToSeeAll = (e) => {
    if (e.key === "Enter" || !isTyping) {
      setIsTyping(true);
    }
  };

  useEffect(() => {
    if (isTyping && currentLine < content.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, content[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTyping, currentLine, content]); 
  return (
    <div
      tabIndex={0}
      onClick={handleTapToSeeAll}
      className="focus:outline-none flex items-center justify-center h-screen bg-gray-100"
    >
      <div
        className="bg-white rounded-md shadow-md"
        style={{
          width: "80vw",
          maxWidth: "100vw",
          height: "100%",
          boxSizing: "border-box",
          overflowY: "auto",
          wordBreak: "break-word",
          textAlign: "left",
        }}
      >
        {/* Header */}
        <div className="bg-gray-200 p-4 rounded-t-md flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="w-2 h-2 lg:w-4 lg:h-4 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 lg:w-4 lg:h-4 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 lg:w-4 lg:h-4 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-gray-800 text-center text-sm lg:text-lg flex-grow truncate">
            {isTyping ? "Executed: introduceSelf.js" : "Executing: introduceSelf.js"}
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 px-4 lg:px-8 text-gray-800">
          <div className="mb-2">
            <span className="text-black">&gt; self.learnAboutMe()</span>
            <br />
            {!isTyping && (
              <span className="text-gray-400">Tap to know more about me</span>
            )}
            {isTyping && <span className="text-gray-400">Loaded data...</span>}
          </div>

          {lines.map((line, index) => (
            <div key={index} className="mb-2">
              <span className="text-black">&gt; {line.command}</span>
              <br />
              <span
                className="text-gray-400 ml-4"
                dangerouslySetInnerHTML={{ __html: line.output }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
