
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import super_pong from './38e83ea2-7e2d-40f9-896f-44cc8a3e4ebf.png';
import church from './kanisa.png';
import incep from './magicstudio-art01.jpeg';

const projectsData = [
  {
    id: 1,
    title: 'Super Pong',
    description: 'A web app that lets multiple users play real-time ping pong matches online, track their progress, and compete in dynamic tournaments with friends or strangers from anywhere.',
    // image: 'https://images.unsplash.com/photo-1581092921461-39b9feb3f1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    image: super_pong,
    techStack: ['React JS', 'Django', 'Solidity'],
    githubLink: 'https://github.com/kvrasx/Trencsendence/tree/master',
    liveLink: 'https://example.com'
  },
  {
    id: 2,
    title: 'IRC',
    description: 'A web-based IRC app that lets users join chat rooms, create channels, and connect with communities in real time — all from a clean, modern interface.',
    // image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    image: church,
    techStack: ['C', 'C++', 'Lime Chat'],
    githubLink: 'https://github.com/Abdelmathin/42cursus-ft_irc',
    liveLink: 'https://example.com'
  },
  {
    id: 3,
    title: 'Inception',
    description: 'A containerized web stack using Docker to deploy a secure WordPress site with Nginx, MariaDB, and PHP — fully automated and ready for scalable web hosting.',
    // image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    image: incep,
    techStack: ['Docker', 'wordpress', 'MariaDB', 'nginx', 'PHP', 'Shell'],
    githubLink: 'https://github.com/momihamm2972/Inception25',
    liveLink: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-portfolio-gray max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills, 
            interests, and the technologies I've learned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-white border border-portfolio-blue text-portfolio-blue font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-gray hover:text-portfolio-blue transition-colors flex items-center gap-1"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-gray hover:text-portfolio-blue transition-colors flex items-center gap-1"
                >
                  {/* <ExternalLink size={18} />
                  <span>Live Demo</span> */}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
