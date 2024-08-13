import React, { useState, useRef, useEffect } from 'react';
import Timeline from './Timeline';
import experiences from '../assets/data/experiences.json';
import pfp from '../assets/pfp.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const handleExperienceClick = (experience: typeof selectedExperience) => {
    setSelectedExperience(experience);
    if (descriptionRef.current) {
      setTimeout(() => {
        descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Short delay to ensure the new content is rendered
    }
  };

  useEffect(() => {
    // Scroll to description on initial load for mobile devices
    if (window.innerWidth < 1280 && descriptionRef.current) { // 1280px is the 'xl' breakpoint in Tailwind
      descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="container mx-auto border-neutral-900 pt-4 pb-24 px-4 lg:px-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-wrap"
      >
        {/* Row 1: Profile Picture and Experience Title */}
        <div className="w-full xl:w-1/2 flex justify-center p-4">
          <motion.img 
            src={pfp} 
            className="xl:w-[90%] lg:w-80 rounded-full object-cover shadow-lg"
            alt="Profile"
            initial={{ opacity: .23, scale: 0.98 }}
            animate={{ opacity: 1,scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center p-4">
          <h2 className="text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-6xl font-bold leading-normal tracking-tight text-transparent">
            My Journey
          </h2>
        </div>

        {/* Row 2: Timeline and Experience Details */}
        <div className="w-full flex flex-col xl:flex-row mt-12">
          <div className="w-full xl:w-1/2 p-4">
            <Timeline 
              experiences={experiences} 
              //@ts-expect-error
              setSelectedExperience={handleExperienceClick} 
              selectedExperience={selectedExperience} 
            />
          </div>
          <div className="w-full xl:w-1/2 p-4" ref={descriptionRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                  {selectedExperience.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedExperience.date}</p>
                <p className="text-white mb-4">{selectedExperience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skillsUsed.map((skill, index) => (
                    <span key={index} className="bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;