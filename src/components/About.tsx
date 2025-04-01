
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-4">My Journey</h3>
            <p className="text-lg text-portfolio-gray mb-6">
              I'm a passionate Computer Science student with a focus on web development and artificial intelligence. 
              My journey in technology began when I was 15, building my first website from scratch.
            </p>
            <p className="text-lg text-portfolio-gray mb-6">
              Currently in my junior year at Example University, I've developed a strong foundation in algorithms, 
              data structures, and software engineering principles.
            </p>
            <p className="text-lg text-portfolio-gray mb-6">
              Beyond academics, I'm an active member of our university's coding club and have participated 
              in several hackathons, winning the "Best Innovation" award at HackState 2023.
            </p>
            <div className="mt-8">
              <Button
                className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white transition-colors"
                asChild
              >
                <a href="/resume.pdf" download="resume.pdf">Download Resume</a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            <div className="bg-portfolio-lightGray p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-portfolio-dark mb-2">Education</h4>
              <p className="text-portfolio-gray">BSc in Computer Science, Example University (Expected 2025)</p>
            </div>
            <div className="bg-portfolio-lightGray p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-portfolio-dark mb-2">Experience</h4>
              <p className="text-portfolio-gray">Software Development Intern at TechCorp (Summer 2023)</p>
            </div>
            <div className="bg-portfolio-lightGray p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-portfolio-dark mb-2">Location</h4>
              <p className="text-portfolio-gray">San Francisco, California</p>
            </div>
            <div className="bg-portfolio-lightGray p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-portfolio-dark mb-2">Interests</h4>
              <p className="text-portfolio-gray">Web Development, AI, Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
