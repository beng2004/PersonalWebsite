import logo from "../assets/smallLogo.png"
import { FaLinkedin, FaGithub, FaSchool, FaGoogle } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between py-8 px-12 "> 
            <div className="logo flex flex-shrink-0 items-center">
                <img className="mx-2 w-14 antialiased" src={logo} alt="logo"/>
            </div>
            <div className="flex-grow flex justify-center">
                <div className="text-lg flex space-x-20">
                    <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-500 transition duration-300">About Me</Link>
                    <Link to="/projects" className="hover:text-blue-500 transition duration-300">Projects</Link>
                    <Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
                </div>
            </div>           
            <div className="flex items-center justify-center gap-4 text-3xl">
                <FaLinkedin className="fa cursor-pointer hover:text-blue-500 transition duration-300"/>
                <FaGithub className="fa cursor-pointer hover:text-blue-500 transition duration-300"/>
                <FaSchool className="fa cursor-pointer hover:text-blue-500 transition duration-300"/>
                <FaGoogle className="fa cursor-pointer hover:text-blue-500 transition duration-300"/>
            </div>
        </nav>
    )
}

export default Navbar