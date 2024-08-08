import React, { useState, useEffect } from 'react';
import logo from "../assets/smallLogo.png";
import { FaLinkedin, FaGithub, FaSchool, FaGoogle } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('/');
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

    return (
        <nav className="flex items-center justify-between py-8 px-12">
            <div className="logo flex flex-shrink-0 items-center">
                <img className="mx-2 w-16 antialiased" src={logo} alt="logo"/>
            </div>
            <div className="flex-grow flex justify-center">
                <div className="text-lg flex space-x-20">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`transition duration-300 ${
                                currentPage === item.path
                                    ? 'text-purple-500 font-semibold text-2xl'
                                    : 'hover:text-purple-500 opacity-40 text-xl'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-3xl">
                <FaLinkedin className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                <FaGithub className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                <FaSchool className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
                <FaGoogle className="fa cursor-pointer hover:text-purple-500 transition duration-300"/>
            </div>
        </nav>
    );
};

export default Navbar;