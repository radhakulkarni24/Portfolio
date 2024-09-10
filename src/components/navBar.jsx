import logo from "../assets/PurpleLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const navBar = () => {
  return( 
 <nav className="mb-10 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 item-center">
    <img className="mx-2 w-28" src={logo} alt="logo" ></img>   
  </div>

  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/radhakulkarni24-react-developer/"><FaLinkedin /></a>
    <a href="https://github.com/radhakulkarni24"> <FaGithub /></a>
    <FaInstagram />
  </div>
 </nav>
  )
};

export default navBar;
