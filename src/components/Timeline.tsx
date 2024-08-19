import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: string[];
}

interface TimelineProps {
  experiences: Experience[];
  setSelectedExperience: (experience: Experience | null) => void;
  selectedExperience: Experience | null;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, setSelectedExperience, selectedExperience }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <motion.div 
            className={`flex mb-4 cursor-pointer group`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedExperience(selectedExperience?.title === experience.title ? null : experience)}
          >
            <div className="flex-none w-24 md:w-48 pr-4 pt-1 text-right hidden sm:block">
              <span className="text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                {experience.date}
              </span>
            </div>
            <div className="flex-grow pl-4 md:pl-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-purple-500 before:to-blue-300">
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full transform -translate-x-1/2 transition-all duration-300 
                               ${selectedExperience?.title === experience.title ? 'bg-purple-500 scale-125' : 'bg-blue-500'}
                               group-hover:bg-purple-500 group-hover:scale-125`}></div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <span className="text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300 block sm:hidden mb-2">
                  {experience.date}
                </span>
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent 
                                transition-all duration-300`}>
                  {experience.title}
                </h3>
                <h3 className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300">
                  {experience.subtitle}
                </h3>
                <span className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 mt-2 inline-block">
                  {selectedExperience?.title === experience.title ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </div>
          </motion.div>
          <AnimatePresence>
            {selectedExperience?.subtitle === experience.subtitle && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 md:ml-56 pl-4 md:pl-8 mb-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-blue-300"
              >
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <p className="text-gray-200 mb-4">{experience.description}</p>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skillsUsed.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-500 text-center text-white px-2 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;