import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaSchool } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    
    const form = useRef<HTMLFormElement>(null);
  
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
    
        // Set the full message including the email
        const fullMessage = `From: ${email}\n\n${message}`;
        
        if (form.current) {
            // Append fullMessage to the hidden input
            const fullMessageInput = form.current.querySelector('input[name="full_message"]') as HTMLInputElement;
            if (fullMessageInput) {
                fullMessageInput.value = fullMessage;
            }
        }
    
        emailjs.sendForm(
            'service_9dw898k', 
            'template_xxorw6n', 
            form.current!,
            'olNVNZIljuP2n7WBO'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        }, (error) => {
            console.error('Failed to send email:', error.text);
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };
  
    return (
        <motion.div 
            className="container mx-auto py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-24 text-white">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <motion.div 
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                                required
                            ></textarea>
                        </div>
                        <input type="hidden" name="full_message" />
                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        {submitStatus === 'success' && (
                            <p className="text-green-500 mt-2">Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </motion.div>

                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-3xl sm:text-xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                        Let's Connect
                    </h3>
                    <p className="text-gray-300 text-2xl mb-6 max-w-md sm:justify-center text-center">
                        Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always excited to connect with fellow developers and tech enthusiasts!
                    </p>
                    <div className="visible xl:invisible flex space-x-6 text-4xl">
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
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
