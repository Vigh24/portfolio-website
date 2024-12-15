import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 sm:p-6 mb-8 animate-slide-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">B.E. in Electronics and Telecommunication</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Pillai College of Engineering • 2020-2024</p>
            <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>CGPA: 8.5/10</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Specialized in Digital Signal Processing, Database Management Systems (DBMS), and Internet of Things (IoT)</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Final Year Project: Safe Ride - Motorbike Crash Detection System</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 sm:p-6 animate-slide-right delay-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Coursework</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Communication Systems</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Microprocessors and Microcontrollers</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Robotics and Automation</span>
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Signal Processing</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Advance Networking Technologies</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Embedded Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;