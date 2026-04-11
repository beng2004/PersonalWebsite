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
                    Open to software engineering, AI engineering, and data science opportunities. Send a note and I’ll get back as soon as possible.
                </p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                <motion.div 
                    className="w-full lg:w-3/5 rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-purple-400 focus:outline-none transition-colors duration-300"
                                required
                            ></textarea>
                        </div>
                        <input type="hidden" name="full_message" />
                        <motion.button
                            type="submit"
                            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3 font-bold text-white transition-all duration-300 hover:brightness-110"
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
                    className="w-full lg:w-2/5 flex flex-col justify-center rounded-2xl border border-white/10 bg-black/20 p-6 text-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <h3 className="mb-4 bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                        Let's Connect
                    </h3>
                    <p className="mb-6 max-w-md text-lg text-white/75 md:text-xl">
                        Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always excited to connect with fellow developers and tech enthusiasts!
                    </p>
                    <div className="flex space-x-6 text-4xl text-white/85">
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
                </motion.div>
            </div>
            </div>
        </motion.div>
    );
};

export default Contact;
