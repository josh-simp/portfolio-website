import logo from "../assets/Preview.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFigma} from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/"><img className="mx-4 w-20" src={logo} alt="logo" srcset="" /></a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/joshua-i-simpson" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/josh-simp/portfolio-website" target="_blank"><FaGithub/></a>
            <a href="https://www.figma.com/design/jXkHwjVAKE8SLAjdmdiPdQ/Portfolio?node-id=0-1&t=dJgDK5hqpeyV6Sh8-1" target="_blank"><FaFigma/></a>
            <a href="/Resume (14).pdf" target="_blank"><FaFilePdf/></a>
        </div>
    </nav>
  ) 
}

export default NavBar