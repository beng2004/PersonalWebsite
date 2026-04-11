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
  const isSelected = (experience: Experience) =>
    selectedExperience?.date === experience.date && selectedExperience?.subtitle === experience.subtitle;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <motion.div 
            className="group mb-4 flex cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            onClick={() => setSelectedExperience(isSelected(experience) ? null : experience)}
          >
            <div className="hidden sm:block flex-none w-28 md:w-52 pr-4 pt-1 text-right">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-cyan-300/80 group-hover:text-cyan-200 transition-colors duration-300">
                {experience.date}
              </span>
            </div>
            <div className="relative flex-grow pl-4 md:pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-300/70 before:via-purple-500/70 before:to-transparent">
              <div className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full transform -translate-x-1/2 transition-all duration-300 
                               ${isSelected(experience) ? 'bg-purple-400 scale-125 shadow-[0_0_18px_rgba(168,85,247,0.75)]' : 'bg-cyan-300'}
                               group-hover:scale-125 group-hover:bg-purple-300`}></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-cyan-200/80 sm:hidden">
                  {experience.date}
                </span>
                <h3 className="mb-2 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-2xl font-extrabold text-transparent transition-all duration-300">
                  {experience.title}
                </h3>
                <h4 className="text-white/80 text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                  {experience.subtitle}
                </h4>
                <span className="mt-3 inline-block text-sm text-cyan-300/80 group-hover:text-purple-300 transition-colors duration-300">
                  {isSelected(experience) ? 'Collapse details' : 'Expand details'}
                </span>
              </div>
            </div>
          </motion.div>
          <AnimatePresence>
            {isSelected(experience) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="relative mb-8 ml-8 pl-4 md:ml-64 md:pl-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-400 before:to-cyan-300/30"
              >
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-xl backdrop-blur-sm">
                  <p className="mb-4 text-white/80">{experience.description}</p>
                  <h4 className="mb-2 text-lg font-semibold text-purple-300">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skillsUsed.map((skill, skillIndex) => (
                      <span key={skillIndex} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-center text-sm text-white/90">
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