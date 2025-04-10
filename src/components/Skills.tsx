
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { category: 'Programming Languages', skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'C/C++', level: 75 },
    // { name: 'C++', level: 70 },
  ]},
  { category: 'Frontend Development', skills: [
    { name: 'HTML & CSS', level: 95 },
    { name: 'React.js', level: 90 },
    // { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    // { name: 'Vue JS', level: 80 },
  ]},
  { category: 'Backend Development', skills: [
    { name: 'Django', level: 85 },
    // { name: 'Express.js', level: 80 },
    { name: 'SQLite', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'RESTful APIs', level: 85 },
  ]},
  { category: 'Tools & Technologies', skills: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    // { name: 'AWS', level: 65 },
    { name: 'Nginx', level: 70 },
    { name: 'VS Code', level: 95 },
  ]},
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-portfolio-gray max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my education and projects.
            Here's an overview of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-slide-up">
          {skillsData.map((category, index) => (
            <div key={index} className="p-6 bg-portfolio-lightGray rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-portfolio-dark mb-6">{category.category}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-gray font-medium">{skill.name}</span>
                      <span className="text-sm text-portfolio-blue font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-portfolio-blue" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
