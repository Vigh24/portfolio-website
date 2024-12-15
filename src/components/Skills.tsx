import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Material-UI",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express",
        "WebSocket",
        "MongoDB",
        "REST APIs"
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        "Android",
        "Java",
        "Kotlin",
        "Android SDK",
        "Mobile UI/UX"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Visual Studio",
        "Android Studio",
        "IoT",
        "C++",
        "OPC UA"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
                             text-gray-700 dark:text-gray-300 rounded-full shadow-sm 
                             hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-800 
                             transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;