import React, { useState, useEffect } from 'react';
import logo from "../assets/smallLogo.png";
import { FaLinkedin, FaGithub, FaSchool, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('/');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Me' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between pt-8 px-4 md:px-12">
            <div className="logo flex flex-shrink-0 items-center">
                <Link to={'/'}>
                    <img className="mx-2 w-16 antialiased" src={logo} alt="logo"/>
                </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex flex-grow justify-center">
                <div className="text-lg flex space-x-20">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`transition duration-300 ${
                                currentPage === item.path
                                    ? 'text-purple-500 font-semibold text-2xl'
                                    : 'hover:text-purple-500 opacity-70 text-xl'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            
            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center justify-center gap-4 text-3xl">
                <a href="https://www.linkedin.com/in/benjaminguerrieri/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                </a>
                <a href="https://www.github.com/beng2004" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                </a>
                <a href="https://www.tcnj.edu" target="_blank" rel="noopener noreferrer">
                    <FaSchool className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-3xl">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-slate-700 shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu} className="text-3xl">
                        <FaTimes />
                    </button>
                </div>
                <div className="flex flex-col items-center space-y-8 mt-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={toggleMobileMenu}
                            className={`transition duration-300 ${
                                currentPage === item.path
                                    ? 'text-purple-500 font-semibold text-2xl'
                                    : 'hover:text-purple-500 opacity-40 text-xl'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex space-x-4 text-3xl mt-8">
                        <a href="https://www.linkedin.com/in/benjaminguerrieri/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                        </a>
                        <a href="https://www.github.com/beng2004" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                        </a>
                        <a href="https://www.tcnj.edu" target="_blank" rel="noopener noreferrer">
                            <FaSchool className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
