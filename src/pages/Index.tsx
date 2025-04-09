
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.title = "MOHAMED MIHAMMI";
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
      <Link to="home" smooth={true} duration={500} className="fixed bottom-8 right-8 z-50">
        <Button className="rounded-full w-12 h-12 bg-portfolio-blue hover:bg-portfolio-darkBlue shadow-lg" aria-label="Scroll to top">
          <ArrowUp size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default Index;
