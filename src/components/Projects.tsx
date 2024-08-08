import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioSplash from '../assets/projects/PortfolioSplash.png'
import TuneTapSplash from '../assets/projects/TuneTapSplash.png'
import GoatSplash from '../assets/projects/GoatSplash.png'
import AutoSenseSplash from '../assets/projects/AutoSenseSplash.jpg';
import ASLSplash from '../assets/projects/ASLSplashjpg.jpg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A dynamic, responsive personal portfolio showcasing my skills and projects. Built with modern web technologies to provide an engaging user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git" ],
      imageUrl: PortfolioSplash,
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "TuneTap",
      description: "An innovative mobile app that revolutionizes how people connect through music. TuneTap allows users to discover shared musical interests by simply tapping phones, creating a unique social experience.",
      technologies: ["React Native", "TypeScript", "Spotify API", "OAuth 2.0", "NFC Technology", "Jest", "Axios"],
      imageUrl: TuneTapSplash,
      githubUrl: "https://github.com/yourusername/tunetap",
      liveUrl: "https://tunetap.app"
    },
    {
      id: 3,
      title: "Fullstack Goat Data Visualizer",
      description: "A comprehensive fullstack solution for Silvies Ranch to visualize and analyze goat data. This project demonstrates strong backend development skills and data visualization techniques.",
      technologies: ["JavaScript", "Express.js", "Node.js", "CSS", "HTML", "postgresSQL", "Chart.js", "RESTful API"],
      imageUrl: GoatSplash,
      githubUrl: "https://github.com/yourusername/goat-data-visualizer"
    },
    {
      id: 4,
      title: "AutoSense",
      description: "A cutting-edge real-time car body type and classification tool. This project showcases advanced computer vision and deep learning techniques for accurate vehicle recognition.",
      technologies: ["Python", "PyTorch", "OpenCV", "YOLO", "CNN", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "Transfer Learning"],
      imageUrl: AutoSenseSplash,
      githubUrl: "https://github.com/yourusername/autosense"
    },
    {
      id: 5,
      title: "ASL Sign Classifier",
      description: "A real-time American Sign Language (ASL) classification system using advanced machine learning algorithms. This research project at TCNJ demonstrates expertise in both deep and shallow learning techniques.",
      technologies: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "Linear Regression", "CNN", "Transfer Learning", "Data Preprocessing", "Feature Extraction", "Hyperparameter Tuning", "Cross-validation"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/yourusername/asl-classifier"
    },
    {
      id: 6,
      title: "Slide Generator",
      description: "An AI-powered presentation creator that automates slide generation using natural language processing and image recognition. This hackathon project showcases integration of multiple APIs and efficient data processing.",
      technologies: ["Python", "Flask", "GPT-3", "Google Cloud Vision API", "HTML", "JavaScript", "JSON", "Selenium Web Scraping", "Natural Language Processing", "RESTful API"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/yourusername/slide-generator",
      liveUrl: "https://devpost.com/software/slide-generator"
    },
    {
      id: 7,
      title: "SignWaver",
      description: "An innovative accessibility solution that enables computer control through hand gestures and voice commands. This project demonstrates advanced computer vision, machine learning, and natural language processing skills.",
      technologies: ["Python", "Google MediaPipe", "Google Cloud Services", "Gemini AI", "Speech Recognition", "Computer Vision", "Natural Language Processing", "Machine Learning", "Voice Command Processing", "Gesture Recognition", "System Integration", "Accessibility Design"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/yourusername/signwaver",
      liveUrl: "https://devpost.com/software/signwaver"
    }
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div 
        className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ aspectRatio: '1 / 1' }}
      >
        <Parallax speed={-5} className="h-full overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </Parallax>
        <div 
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-300"
          style={{
            clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)',
            opacity: isHovered ? 0.9 : 0.7, // Increase opacity on hover
          }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
          <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">{project.title}</h3>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-6 text-gray-100 text-lg drop-shadow-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((tech, index) => (
                <span key={index} className="bg-blue-600/70 text-white px-3 py-1 rounded-full text-sm shadow-md">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="bg-blue-600/70 text-white px-3 py-1 rounded-full text-sm shadow-md">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
            <div className="flex space-x-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors duration-300 shadow-md"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full transition-colors duration-300 shadow-md"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  
  const Projects: React.FC = () => {
    return (
      <ParallaxProvider>
        <div className="p-24">
          <div className="container opacity-90 mx-auto px-6">
            <h2 className="text-6xl font-bold text-center mb-24 text-white">
              My <span className="text-purple-500">Projects</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
  