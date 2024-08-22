import React, { useState, useEffect } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import PortfolioSplash from '../assets/projects/PortfolioSplash.png'
import TuneTapSplash from '../assets/projects/TuneTapSplash.png'
import GoatSplash from '../assets/projects/GoatSplash.png'
import AutoSenseSplash from '../assets/projects/AutoSenseSplash.jpg';
import ASLSplash from '../assets/projects/ASLSplashjpg.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaFileAlt, FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  paperUrl?: string;
}

const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A dynamic, responsive personal portfolio showcasing my skills and projects. Built with modern web technologies to provide an engaging user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git" ],
      imageUrl: PortfolioSplash,
      githubUrl: "https://github.com/beng2004/PersonalWebsite",
    },
    {
      id: 3,
      title: "Fullstack Data Visualizer",
      description: "A fullstack solution for a Goat Ranch Stakeholder to visualize and analyze their goat data. This project demonstrates strong backend development skills and data visualization techniques.",
      technologies: ["JavaScript", "Express.js", "Node.js", "CSS", "HTML", "postgresSQL", "Chart.js", "APIs"],
      imageUrl: GoatSplash,
      githubUrl: "https://github.com/beng2004/FullStackDatabaseWebsite"
    },
    {
      id: 4,
      title: "AutoSense",
      description: "A real-time car body type and classification tool. This project showcases computer vision and deep learning techniques for accurate vehicle recognition.",
      technologies: ["Python", "PyTorch", "OpenCV", "YOLOv8", "CNNs", "Jupyter", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "Transfer Learning"],
      imageUrl: AutoSenseSplash,
      githubUrl: "https://github.com/beng2004/AutoSense"
    },
    {
      id: 2,
      title: "TuneTap",
      description: "An innovative mobile app that aims to connect people through music. TuneTap allows users to discover shared musical interests by simply tapping phones, creating a unique social experience.",
      technologies: ["React Native", "TypeScript", "Spotify API", "OAuth 2.0", "NFC", "Jest", "Axios"],
      imageUrl: TuneTapSplash,
    },
    {
      id: 5,
      title: "ASL Sign Classifier",
      description: "A real-time American Sign Language (ASL) classification system using advanced machine learning algorithms. This research project at TCNJ demonstrates deep and shallow learning techniques.",
      technologies: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "Regression", "CNNs", "RNNs"],
      imageUrl: ASLSplash,
      paperUrl: "https://dl.acm.org/doi/10.1145/3626253.3635406"
    },
    {
      id: 6,
      title: "Slide Generator",
      description: "An AI-powered presentation creator that automates slide generation using natural language processing and image recognition. This hackathon project showcases integration of multiple APIs and efficient data processing.",
      technologies: ["Python", "Flask", "GPT-3.5", "Google Cloud Vision API", "HTML", "JavaScript", "JSON", "Selenium", "NLP", "APIs"],
      imageUrl: ASLSplash,
    },
    {
      id: 7,
      title: "SignWaver",
      description: "An accessibility solution that enables computer control through hand gestures and voice commands. This project demonstrates computer vision, machine learning, and natural language processing skills.",
      technologies: ["Python", "OpenCV", "NLP", "Gemini AI", "Speech Recognition", "Google Cloud", "ML"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/christopherlam1016/HackTCNJ2024",
    }
  ];
 
  
  
  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isActive, setIsActive] = useState(false);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(4); // Start from the 5th skill
  
    const gradients = [
      'bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900',
      'bg-gradient-to-br from-cyan-700 via-teal-800 to-green-900',
      'bg-gradient-to-br from-rose-700 via-pink-800 to-purple-900',
      'bg-gradient-to-br from-amber-700 via-orange-800 to-red-900',
      'bg-gradient-to-br from-emerald-700 via-green-800 to-teal-900',
      'bg-gradient-to-br from-fuchsia-700 via-purple-800 to-indigo-900',
      'bg-gradient-to-br from-sky-700 via-blue-800 to-indigo-900',
    ];
  
    const gradient = gradients[index % gradients.length];
  
    const visibleSkills = project.technologies.slice(0, 3);
    const hiddenSkills = project.technologies.slice(3);
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout;
      if (isActive && hiddenSkills.length > 0) {
        intervalId = setInterval(() => {
          setCurrentSkillIndex((prevIndex) => 
            prevIndex >= project.technologies.length - 1 ? 3 : prevIndex + 1
          );
        }, 2000); // Change skill every 2 seconds
      }
      return () => clearInterval(intervalId);
    }, [isActive, project.technologies.length, hiddenSkills.length]);
  
    return (
      <motion.div 
      className={`relative rounded-lg overflow-hidden shadow-lg group flex flex-col justify-between p-4 sm:p-6 ${gradient} `}
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * .1 }}
        style={{ aspectRatio: '4 / 3' }}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsActive(true)}
      >
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 text-white z-10">
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold mb-2 drop-shadow-lg 
                         bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {project.title}
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-100 text-sm sm:text-base drop-shadow-md ">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 relative">
              {visibleSkills.map((tech, index) => (
                <span key={index} className="bg-white/20 text-white px-2 py-1 rounded-full text-xs sm:text-sm shadow-md">
                  {tech}
                </span>
              ))}
              {hiddenSkills.length > 0 && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isActive ? currentSkillIndex : 'more'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/20 text-white px-2 py-1 rounded-full text-xs sm:text-sm shadow-md"
                  >
                    {isActive ? project.technologies[currentSkillIndex] : `+${hiddenSkills.length} more`}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-500/20 px-3 py-1 rounded-full transition-colors duration-300 shadow-md text-md sm:text-base flex items-center space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              {project.paperUrl && (
                <a 
                  href={project.paperUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-500/20 px-3 py-1 rounded-full transition-colors duration-300 shadow-md text-sm sm:text-base flex items-center space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaFileAlt />
                  <span>Paper</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  const Projects: React.FC = () => {
    return (
      <ParallaxProvider>
        <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-24 text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Projects</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </ParallaxProvider>
    );
  };
  
  export default Projects;
  