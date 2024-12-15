import React from 'react';
import { Github, ExternalLink, Lock } from 'lucide-react';
import dashboardImg from '../assets/images/dashboard-dark.png';
import apniBhashaImg from '../assets/images/apni-bhasha.png';
import softphoneImg from '../assets/images/softphone.PNG';
import safeRideImg from '../assets/images/Safe-Ride.png';

const Projects = () => {
  const projects = [
    {
      title: "IoT Sensor Dashboard",
      description: "Real-time dashboard for monitoring IoT sensor data with advanced visualization features. Includes real-time data visualization, multiple sensor support, interactive charts and graphs, data export functionality, and customizable dashboard layouts.",
      technologies: ["React", "Material-UI", "Node.js", "Express", "WebSocket", "MongoDB"],
      github: "github.com/Vigh24/iot-sensor-dashboard",
      image: dashboardImg
    },
    {
      title: "Apni Bhasha - Screen Translation App",
      description: "Android application for real-time screen translation. Features include real-time screen translation, support for multiple languages, floating translation button, interactive translation overlays, and privacy-focused design.",
      technologies: ["Kotlin", "Android SDK", "ML Kit", "Google Cloud Translation API"],
      github: "github.com/Vigh24/apnibhasha",
      image: apniBhashaImg
    },
    {
      title: "VoIP Softphone Application",
      description: "Feature-rich VoIP softphone application with multiple line support, call transfer, hold/resume, mute, screen sharing, and call recording. Supports multiple audio and video codecs. Implemented advanced features like call quality monitoring, network adaptation, and secure communication protocols for enterprise-level deployments.",
      technologies: ["C#", "Windows Forms", "VoIP Protocols", "Audio/Video Codecs"],
      image: softphoneImg,
      isCompanyProject: true
    },
    {
      title: "Motorcycle Safety System",
      description: "Smart motorcycle safety system using Bluetooth sensors. Features real-time accident detection, location tracking, emergency SOS system, medical information display, and emergency contact notification.",
      technologies: ["Android Studio", "Java", "Bluetooth LE", "GPS"],
      image: safeRideImg,
      github: "github.com/Vigh24/motorcycle-safety-system"
    },
    {
      title: "OPC UA Simulation System",
      description: "Python-based OPC UA server and client for industrial equipment simulation. Includes real-time data generation, GUI interface, multi-parameter monitoring, and automatic reconnection handling.",
      technologies: ["Python", "OPC UA", "PyQt5"],
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      isCompanyProject: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 
                ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'} delay-${(index + 1) * 100}`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  {project.github ? (
                    <a
                      href={`https://${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800/10 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-800/20 dark:hover:bg-gray-700/70 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Source Code
                    </a>
                  ) : project.isCompanyProject && (
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-800/10 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-lg">
                      <Lock className="w-4 h-4 mr-2" />
                      <span className="text-sm">Company Project • Private Code</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;