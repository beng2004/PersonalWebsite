import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero6.png"
import resumePdf from "../assets/data/benguerrieriresume2026.pdf"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero: React.FC = () => {
    const scrollToResume = () => {
        const section = document.getElementById('resume-preview');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
    <motion.div 
        className="pb-20 pt-4 md:pt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
       >
        <div className="glass-card relative overflow-hidden px-6 py-10 sm:px-10 md:py-14">
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="w-full lg:w-[58%] text-center lg:text-left">
                    <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                        Engineering • AI • Data • Product
                    </span>

                    <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Benjamin
                        <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                            Guerrieri
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl lg:mx-0">
                        {HERO_CONTENT}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                        <Link
                            to="/PersonalWebsite/projects"
                            className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:brightness-110"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/PersonalWebsite/contact"
                            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
                        >
                            Let’s Connect
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[42%]">
                    <div className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl shadow-cyan-950/40">
                        <img
                            src={profilePic}
                            alt="Ben Guerrieri"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="relative mt-10 flex justify-center">
                <button
                    onClick={scrollToResume}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
                >
                    View My Resume
                    <span className="text-lg leading-none">↓</span>
                </button>
            </div>
        </div>

        <section id="resume-preview" className="mt-10 glass-card p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Resume Preview</p>
                    <h2 className="mt-2 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                        Benjamin Guerrieri
                    </h2>
                    <p className="mt-2 text-white/70">B.S. Computer Science (Data Science) • The College of New Jersey • GPA 3.9</p>
                </div>
                <a
                    href={resumePdf}
                    download
                    className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                    Download Resume
                </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <iframe
                    src={resumePdf}
                    title="Benjamin Guerrieri Resume Preview"
                    className="h-[640px] w-full"
                />
            </div>
        </section>
        </motion.div>
    )
}

export default Hero