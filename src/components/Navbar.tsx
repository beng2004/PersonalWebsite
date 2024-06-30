import logo from "../assets/smallLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSchool } from "react-icons/fa" 
import { FaGoogle} from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="xl:mb-20 flex items-center justify-between py-6"> 
            <div className="logo flex flex-shrink-0 items-center">
                <img className="fa mx-2 w-15 antialliased" src={logo} alt ="logo"/>
            </div>
            <div className="logo m-8 flex items-center justify-center gap-4 text-3xl">
                <FaLinkedin className="fa"/>
                <FaGithub className="fa"/>
                <FaSchool className="fa"/>
                <FaGoogle className="fa"/>
            </div>
        </nav>
    )
}

export default Navbar