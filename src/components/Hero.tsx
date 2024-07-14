import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero6.png"

const Hero: React.FC = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35"> 
            <div className=" flex flex-wrap"> 
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl 2xl:text-8xl">Ben Guerrieri</h1>
                        <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-4xl leading-normal tracking-tight text-transparent">Software Engineer</span>
                         <p className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="Ben Guerrieri"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero