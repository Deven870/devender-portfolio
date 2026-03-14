import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()
  
  const projects = [
    {
      title: 'Women Safety Analysis and Intelligent Threat Protection',
      description: 'Built a real-time computer vision system for threat detection with facial recognition and automated distress alert mechanisms.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'DeepFace', 'NumPy'],
      github: 'https://github.com/Deven870/women-safety',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Stock Price Prediction Using LSTM Neural Networks',
      description: 'Developed a deep learning forecasting pipeline with data preprocessing, normalization, and evaluation using TensorFlow and Keras.',
      tech: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas'],
      github: 'https://github.com/Deven870/strock-price-sentiment',
      icon: 'fa-chart-line'
    },
  ]

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
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
