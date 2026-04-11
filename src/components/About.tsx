import React, { useState } from 'react';
import Timeline from './Timeline';
import experiences from '../assets/data/experiences.json';
import pfp from '../assets/pfp.jpg';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  return (
    <div className="pb-24 pt-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-4 flex flex-col items-center"
      >
        <div className="glass-card w-full p-6 sm:p-8 lg:p-10">
          <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-8 mb-10">
          <motion.img 
            src={pfp} 
            className="w-52 sm:w-56 xl:w-64 rounded-3xl object-cover shadow-2xl shadow-purple-900/30"
            alt="Profile"
            initial={{ opacity: 0.2, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
            <div className="text-center xl:text-left">
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">Career Path</p>
              <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-5xl xl:text-6xl font-extrabold tracking-tight text-transparent">
                My Journey
              </h2>
              <p className="mt-4 max-w-2xl text-white/70 text-lg">
                From systems engineering and applied AI to full-stack architecture, each role below reflects how I build practical, high-impact solutions.
              </p>
            </div>
          </div>

          <div className="w-full mt-6">
            <Timeline 
              experiences={experiences} 
              setSelectedExperience={setSelectedExperience} 
              selectedExperience={selectedExperience} 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;