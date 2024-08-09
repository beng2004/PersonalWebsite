import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  date: string;
  title: string;
  description: string;
  skillsUsed: string[];
}

interface TimelineProps {
  experiences: Experience[];
  setSelectedExperience: (experience: Experience) => any;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, setSelectedExperience }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <motion.div 
          key={index}
          className="flex flex-col md:flex-row mb-8 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onClick={() => setSelectedExperience(experience)}
        >
          <div className="flex-none w-24 md:w-48 pr-4 pt-1 text-right">
            <span className="text-sm font-semibold text-blue-400">{experience.date}</span>
          </div>
          <div className="flex-grow pl-4 md:pl-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-purple-500 before:to-blue-300">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">{experience.title}</h3>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;