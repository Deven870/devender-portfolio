import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  const experiences = [
    {
      title: 'AI & ML Intern (Certified Program)',
      company: 'Edunet Foundation in collaboration with AICTE',
      location: 'India',
      period: '18 Jun 2025 - 30 Jul 2025',
      description: [
        'Successfully completed a 6-week internship on Artificial Intelligence and Machine Learning',
        'Participated in structured training delivered by Edunet Foundation in collaboration with All India Council for Technical Education (AICTE)',
        'Demonstrated active participation and engagement throughout the internship program',
        'Certificate-backed participation with Student STU ID: STU642cd4887b0121680659592'
      ],
      technologies: ['Artificial Intelligence', 'Machine Learning', 'AICTE', 'Edunet Foundation']
    },
    {
      title: 'Software Developer',
      company: 'Xpedicr Industry',
      location: 'India',
      period: 'Aug 2025 - Feb 2026',
      description: [
        'Developed RESTful backend APIs using Python for internal business applications and operational data workflows',
        'Optimized SQL and MongoDB queries, improving database performance and system responsiveness',
        'Implemented modular backend components that improved scalability and maintainability of enterprise applications',
        'Collaborated through Git-based workflows including feature branching, pull requests, and code reviews'
      ],
      technologies: ['Python', 'RESTful APIs', 'SQL', 'MongoDB', 'Git', 'System Design']
    },
    {
      title: 'Summer Intern',
      company: 'NITI Aayog',
      location: 'India',
      period: 'June 2024 - July 2024',
      description: [
        'Researched emerging technologies including artificial intelligence, cloud computing, and digital transformation frameworks',
        'Contributed to structured analytics documentation and policy technology reports',
        'Evaluated feasibility of technology adoption models supporting public-sector digital initiatives'
      ],
      technologies: ['AI Research', 'Cloud Computing', 'Analytics', 'Policy Documentation']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-purple-400 to-pink-400 text-transparent bg-clip-text transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500 opacity-30"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-12 relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-4 border-bg-dark z-10 shadow-lg shadow-primary/50"></div>

                {/* Content card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-primary/10 hover:border-primary/30 group">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-center gap-3 text-gray-400 text-sm`}>
                        <span className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fas fa-calendar-alt"></i>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-4 text-gray-300 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          {index % 2 === 0 ? (
                            <>
                              <span className="flex-1">{item}</span>
                              <i className="fas fa-chevron-right text-primary text-xs mt-1.5 hidden md:block"></i>
                            </>
                          ) : (
                            <>
                              <i className="fas fa-chevron-right text-primary text-xs mt-1.5"></i>
                              <span className="flex-1">{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} flex-wrap gap-2`}>
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
