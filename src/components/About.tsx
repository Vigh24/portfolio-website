import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            As an Electronics and Telecommunication Engineering graduate, I bring a unique blend of
            hardware expertise and software development skills. My journey in technology has equipped me
            with a deep understanding of both electronic systems and modern software solutions.
          </p>
          
          <p>
            I specialize in developing innovative solutions that bridge the gap between hardware and
            software, with a particular focus on creating efficient and user-friendly applications. My
            background in telecommunications has given me a strong foundation in signal processing,
            communication systems, and network architecture.
          </p>

          <p>
            Currently, I'm passionate about leveraging my diverse skill set to create impactful solutions in
            the tech industry, particularly in areas where hardware and software integration can drive
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;