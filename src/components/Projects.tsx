import React, { useState, useEffect } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import PortfolioSplash from '../assets/projects/PortfolioSplash.png'
import GoatSplash from '../assets/projects/GoatSplash.png'
import AutoSenseSplash from '../assets/projects/AutoSenseSplash.jpg';
import ASLSplash from '../assets/projects/ASLSplashjpg.jpg'
import { ParallaxProvider } from 'react-scroll-parallax';
import { FaFileAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  devpostUrl?: string;
  paperUrl?: string;
}

const projects: Project[] = [
    {
      id: 8,
      title: "HackTCNJ 2026 - Infini-Dungeon",
      description: "A procedurally generated dungeon crawler where players battle AI-voiced enemies using word-based combat. Built for HackTCNJ 2026 with dynamic narration, generated content, and replayable runs.",
      technologies: ["React 19", "TypeScript", "Vite", "Google Gemini", "ElevenLabs TTS", "HTML5 Canvas", "Web Audio API", "Prompt Engineering", "Game Logic"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/christopherlam1016/HackTCNJ2026",
      devpostUrl: "https://devpost.com/software/infini-dungeon",
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
      title: "HackTCNJ 2025 - Collaborative Board",
      description: "A collaborative notes and bulletin-board app designed for real-time student productivity, featuring OAuth sign-in, board/post workflows, file uploads, and AI-powered summarization.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OAuth", "OpenAI API", "REST APIs"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/beng2004/HackTCNJ-2025",
      devpostUrl: "https://devpost.com/software/post-it-4uhvwy",
    },
    {
      id: 7,
      title: "HackTCNJ 2024 - SignWaver",
      description: "An accessibility solution that enables computer control through hand gestures and voice commands. This project demonstrates computer vision, machine learning, and natural language processing skills.",
      technologies: ["Python", "OpenCV", "NLP", "Gemini AI", "Speech Recognition", "Google Cloud", "ML"],
      imageUrl: ASLSplash,
      githubUrl: "https://github.com/christopherlam1016/HackTCNJ2024",
      devpostUrl: "https://devpost.com/software/signwaver",
    },
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
      id: 5,
      title: "ASL Sign Classifier",
      description: "A real-time American Sign Language (ASL) classification system using advanced machine learning algorithms. This research project at TCNJ demonstrates deep and shallow learning techniques.",
      technologies: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "Regression", "CNNs", "RNNs"],
      imageUrl: ASLSplash,
      paperUrl: "https://dl.acm.org/doi/10.1145/3626253.3635406"
    }
  ];
 
  
  
  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [isActive, setIsActive] = useState(false);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(4); // Start from the 5th skill
  
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
      className="group relative flex min-h-[27rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-indigo-950/75 p-5 shadow-xl shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_20px_40px_rgba(56,189,248,0.14)] sm:p-6"
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * .07 }}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsActive(true)}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400" />

        <div className="relative z-10 flex h-full flex-col text-white">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/75">Project {String(index + 1).padStart(2, '0')}</p>
          <h3 className="mb-3 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
            {project.title}
          </h3>

          <p className="text-sm text-white/90 sm:text-base">
            {project.description}
          </p>

          <div className="relative mt-4 flex flex-wrap gap-2">
            {visibleSkills.map((tech, index) => (
              <span key={index} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/95 sm:text-sm">
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
                  className="rounded-full border border-cyan-200/35 bg-cyan-300/15 px-2.5 py-1 text-xs text-cyan-100 sm:text-sm"
                >
                  {isActive ? project.technologies[currentSkillIndex] : `+${hiddenSkills.length} more`}
                </motion.span>
              </AnimatePresence>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-full border border-cyan-300/45 bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/30 sm:text-sm"
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
                className="flex items-center space-x-2 rounded-full border border-purple-300/40 bg-purple-400/20 px-3 py-1 text-xs font-medium text-purple-100 transition hover:bg-purple-300/30 sm:text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <FaFileAlt />
                <span>Paper</span>
              </a>
            )}
            {project.devpostUrl && (
              <a 
                href={project.devpostUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-full border border-amber-300/45 bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-100 transition hover:bg-amber-300/30 sm:text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
                <span>Devpost</span>
              </a>
            )}
            {!project.githubUrl && !project.paperUrl && !project.devpostUrl && (
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 sm:text-sm">
                Link coming soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  const Projects: React.FC = () => {
    return (
      <ParallaxProvider>
        <div className="pb-24 pt-4">
          <div className="glass-card p-6 sm:p-8 md:p-10">
            <h2 className="mb-4 text-center text-4xl font-black text-white sm:text-5xl md:text-6xl">
              Featured <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-white/70">
              Production-minded full-stack, AI, and applied ML builds spanning enterprise systems, accessibility tools, and research-backed products.
            </p>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
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
  