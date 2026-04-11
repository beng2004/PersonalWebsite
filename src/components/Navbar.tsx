import React, { useState, useEffect } from 'react';
import logo from "../assets/smallLogo.png";
import { FaLinkedin, FaGithub, FaSchool, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('/PersonalWebsite/');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const navItems = [
        { path: '/PersonalWebsite/', label: 'Home' },
        { path: '/PersonalWebsite/about', label: 'About Me' },
        { path: '/PersonalWebsite/projects', label: 'Projects' },
        { path: '/PersonalWebsite/contact', label: 'Contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="sticky top-4 z-50 mb-10 mt-5">
            <div className="glass-card flex items-center justify-between px-4 py-3 md:px-6 md:py-4 shadow-[0_0_30px_rgba(139,92,246,0.18)]">
                <Link to={'/PersonalWebsite/'}>
                    <img className="w-12 md:w-14 antialiased" src={logo} alt="logo"/>
                </Link>

                <div className="hidden md:flex flex-grow justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-2 py-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                                currentPage === item.path
                                    ? 'bg-white/15 text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center gap-4 text-2xl text-white/80">
                <a href="https://www.linkedin.com/in/benjaminguerrieri/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon-glow cursor-pointer hover:text-cyan-300"/>
                </a>
                <a href="https://www.github.com/beng2004" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon-glow cursor-pointer hover:text-purple-300"/>
                </a>
                <a href="https://www.tcnj.edu" target="_blank" rel="noopener noreferrer">
                    <FaSchool className="icon-glow cursor-pointer hover:text-blue-300"/>
                </a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-3xl text-white/80 hover:text-white" aria-label="Toggle menu">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            
            <div className={`fixed right-0 top-0 z-50 h-full w-72 border-l border-white/10 bg-neutral-950/95 p-6 backdrop-blur-xl transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-white/80">Navigate</p>
                    <button onClick={toggleMobileMenu} className="text-3xl text-white/80 hover:text-white" aria-label="Close menu">
                        <FaTimes />
                    </button>
                </div>

                <div className="mt-10 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={toggleMobileMenu}
                            className={`rounded-xl px-4 py-3 text-lg transition duration-300 ${
                                currentPage === item.path
                                    ? 'bg-white/10 text-white'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="mt-6 flex space-x-4 text-3xl text-white/80">
                        <a href="https://www.linkedin.com/in/benjaminguerrieri/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon-glow cursor-pointer hover:text-cyan-300"/>
                        </a>
                        <a href="https://www.github.com/beng2004" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon-glow cursor-pointer hover:text-purple-300"/>
                        </a>
                        <a href="https://www.tcnj.edu" target="_blank" rel="noopener noreferrer">
                            <FaSchool className="icon-glow cursor-pointer hover:text-blue-300"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
