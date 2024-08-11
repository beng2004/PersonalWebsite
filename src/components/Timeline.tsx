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
  setSelectedExperience: (experience: Experience) => void;
  selectedExperience: Experience;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, setSelectedExperience, selectedExperience }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <motion.div 
          key={index}
          className={`flex mb-8 cursor-pointer group`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => setSelectedExperience(experience)}
        >
          <div className="flex-none w-24 md:w-48 pr-4 pt-1 text-right hidden sm:block">
            <span className="text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
              {experience.date}
            </span>
          </div>
          <div className="flex-grow pl-4 md:pl-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-purple-500 before:to-blue-300">
            <div className={`absolute left-0 top-2 w-3 h-3 rounded-full transform -translate-x-1/2 transition-all duration-300 
                             ${selectedExperience.title === experience.title ? 'bg-purple-500 scale-125' : 'bg-blue-500'}
                             group-hover:bg-purple-500 group-hover:scale-125`}></div>
            <div className="bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <span className="text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300 block sm:hidden mb-2">
                {experience.date}
              </span>
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent 
                              transition-all duration-300`}>
                {experience.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {experience.description.substring(0, 100)}...
              </p>
              <span className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mt-2 inline-block">
                Click to view details
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;