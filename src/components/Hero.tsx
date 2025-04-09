
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import mohamedImg from './momihamm.jpg'; // ← the ./ means "same folder"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-lightGray to-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Hi, I'm <span className="text-portfolio-blue">MOHAMED</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-portfolio-gray mb-6">
              Computer Science Student
            </h2>
            <p className="text-lg text-portfolio-gray mb-8 max-w-xl">
              I'm passionate about software development, blockchain, and creating
              solutions that make a difference. Currently studying Computer Science
              at 1337.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors"
                asChild
              >
                <a href="/resume.pdf" download="resume.pdf">Download Resume</a>
              </Button>
              <Button
                variant="outline"
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                asChild
              >
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="bg-white p-1 rounded-full shadow-lg max-w-xs md:max-w-sm mx-auto">
              <img
                src={mohamedImg}
                alt="MOHAMED MIHAMMI"
                className="rounded-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <ArrowDown size={30} className="text-portfolio-blue" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
