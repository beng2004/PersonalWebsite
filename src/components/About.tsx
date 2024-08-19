import React, { useState } from 'react';
import Timeline from './Timeline';
import experiences from '../assets/data/experiences.json';
import pfp from '../assets/pfp.jpg';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  return (
    <div className="container mx-auto border-neutral-900 pt-4 pb-24 px-4 lg:px-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-col items-center"
      >
        {/* Row 1: Profile Picture and Experience Title */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-center mb-12">
          <motion.img 
            src={pfp} 
            className="w-64 xl:w-80 rounded-full object-cover shadow-lg mb-8 xl:mb-0 xl:mr-12"
            alt="Profile"
            initial={{ opacity: .23, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <h2 className="text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-5xl xl:text-6xl font-bold leading-normal tracking-tight text-transparent">
            My Journey
          </h2>
        </div>

        {/* Row 2: Timeline */}
        <div className="w-full mt-12">
          <Timeline 
            experiences={experiences} 
            setSelectedExperience={setSelectedExperience} 
            selectedExperience={selectedExperience} 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;