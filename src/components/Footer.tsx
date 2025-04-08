
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MOHAMED MIHAMMI</h3>
            <p className="text-gray-400">Computer Science Student</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link to="home" smooth={true} duration={500} className="text-gray-400 hover:text-portfolio-blue transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-portfolio-blue transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="text-gray-400 hover:text-portfolio-blue transition-colors cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} className="text-gray-400 hover:text-portfolio-blue transition-colors cursor-pointer">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-portfolio-blue transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-blue transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-blue transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-blue transition-colors">
              <Twitter size={24} />
            </a>
            <a href="mailto:momihamm@example.com" className="text-gray-400 hover:text-portfolio-blue transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MOHAMED MIHAMMI. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="/resume.pdf" download="resume.pdf" className="hover:text-portfolio-blue transition-colors">
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
