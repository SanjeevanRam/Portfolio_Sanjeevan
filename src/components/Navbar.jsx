import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" width={100} height={53} />
        </a>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/SanjeevanRam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-transform duration-300 hover:scale-125 hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjeevan-ram-55bb4a224/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-transform duration-300 hover:scale-125 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/just_sanjeevan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform duration-300 hover:scale-125 hover:text-pink-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/sanjeevanram555"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;