import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaSchool } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'benjaminguerrieri7@gmail.com';

    const links = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/benjaminguerrieri/',
            icon: <FaLinkedin className="text-3xl text-cyan-300" />,
            description: 'Professional updates, career highlights, and networking.'
        },
        {
            label: 'GitHub',
            href: 'https://www.github.com/beng2004',
            icon: <FaGithub className="text-3xl text-purple-300" />,
            description: 'Projects, experiments, and source code.'
        },
        {
            label: 'TCNJ',
            href: 'https://www.tcnj.edu',
            icon: <FaSchool className="text-3xl text-blue-300" />,
            description: 'The College of New Jersey.'
        },
        {
            label: 'Email',
            href: `mailto:${contactEmail}`,
            icon: <MdEmail className="text-3xl text-amber-300" />,
            description: contactEmail
        },
    ];
  
    return (
        <motion.div 
            className="pb-24 pt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="glass-card p-6 sm:p-8 md:p-10">
                <h2 className="mb-4 text-center text-4xl font-black text-white sm:text-5xl md:text-6xl">
                    Get in <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-white/70">
                    Open to opportunities and collaboration. Reach out directly through any of the channels below.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.label === 'Email' ? undefined : '_blank'}
                            rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                            className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-200/40 hover:bg-black/30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.1 + index * 0.08 }}
                        >
                            <div className="mb-3">{link.icon}</div>
                            <h3 className="text-xl font-semibold text-white">{link.label}</h3>
                            <p className="mt-1 text-sm text-white/70 break-all">{link.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
