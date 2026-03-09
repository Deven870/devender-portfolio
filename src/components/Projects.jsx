
function Projects() {
  const projects = [
    {
      title: 'Stock Price Prediction',
      description: 'ML model to predict stock prices using LSTM neural networks with 85% accuracy',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Keras'],
      github: 'https://github.com/Deven870/stock-prediction',
      icon: 'fa-chart-line'
    },
    {
      title: 'Women Safety Detection',
      description: 'Real-time safety system using computer vision and ML for threat detection',
      tech: ['Python', 'OpenCV', 'YOLOv5', 'FastAPI'],
      github: 'https://github.com/Deven870/women-safety',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Backend API System',
      description: 'Scalable REST API with authentication, rate limiting, and microservices architecture',
      tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/Deven870/backend-api',
      icon: 'fa-server'
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <i className={`fas ${project.icon} text-3xl text-primary mr-3`}></i>
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-bg-dark text-primary text-sm rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-purple-400 transition-colors font-semibold"
              >
                <i className="fab fa-github mr-2"></i>
                View on GitHub
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
