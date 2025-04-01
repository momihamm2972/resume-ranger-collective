
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-portfolio-darkBlue font-bold text-2xl">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            Portfolio
          </ScrollLink>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-portfolio-gray hover:text-portfolio-blue transition-colors cursor-pointer font-medium"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button
            className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors"
            asChild
          >
            <a href="/resume.pdf" download="resume.pdf">Download Resume</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-portfolio-gray">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="block text-portfolio-gray hover:text-portfolio-blue transition-colors cursor-pointer font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-2">
              <Button
                className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors"
                asChild
              >
                <a href="/resume.pdf" download="resume.pdf">Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
