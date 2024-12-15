import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Technical Intern",
      company: "Eratronics Pvt. Ltd.",
      period: "January 2024 - August 2024",
      description: [
        "Assisting with Network Maintenance and Panel building",
        "Assisting in Network Deployment",
        "Conducting Testing and Troubleshooting",
        "Research and Development",
        "Software Development",
        "Android Application Development"
      ],
      summary: "During my internship, I gained hands-on experience in various technical domains, which significantly enhanced my interest in software and Android application development.",
      technologies: ["C++", "Python", "Java", "Flutter", "Android Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">• {item}</li>
                ))}
              </ul>

              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                {exp.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tech}
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

export default Experience;