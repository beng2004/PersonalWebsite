import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero6.png"

const Hero: React.FC = () => {
    return (
        <div className="min-h-fit flex items-start justify-center px-4 sm:px-6 md:px-8 pt-20 lg:pt-32">
            <div className="w-full max-w-8xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin tracking-tight mb-4 sm:mb-6">
                            Ben Guerrieri
                        </h1>
                        <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-normal tracking-tight text-transparent">
                            Software Engineer
                        </span>
                        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl md:text-2xl font-light tracking-tight">
                            {HERO_CONTENT}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                        <div className="flex justify-center lg:justify-end">
                            <img 
                                src={profilePic} 
                                alt="Ben Guerrieri" 
                                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero