import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Projects() {
  const [ref, isVisible] = useScrollAnimation()
  
  const projects = [
    {
      title: 'Women Safety Analysis and Intelligent Threat Protection',
      category: 'Computer Vision | Real-time Safety System',
      problem: 'Create a real-time threat detection system that can interpret live video input and trigger help mechanisms quickly.',
      approach: 'Combined OpenCV, MediaPipe, and DeepFace into a real-time analysis pipeline for gesture tracking, face recognition, and threat monitoring.',
      outcome: 'Delivered a working applied ML prototype for intelligent threat detection and automated distress alert workflows.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'DeepFace', 'NumPy'],
      github: 'https://github.com/Deven870/women-safety',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Stock Price Prediction Using LSTM Neural Networks',
      category: 'Deep Learning | Financial Time-Series Forecasting',
      problem: 'Build a predictive workflow that can model temporal stock market behavior from historical financial data.',
      approach: 'Prepared and normalized time-series data, trained LSTM models in TensorFlow and Keras, and evaluated prediction quality with repeatable experiments.',
      outcome: 'Produced a practical forecasting pipeline and research foundation that also supported a patent filing direction.',
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
              className="bg-bg-card p-7 rounded-2xl border border-gray-700 hover:border-primary hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-2">{project.category}</p>
                  <div className="flex items-center">
                    <i className={`fas ${project.icon} text-3xl text-primary mr-3`}></i>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>

              <div className="space-y-4 mb-6">
                <div className="rounded-xl bg-bg-dark/70 border border-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Problem</p>
                  <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-xl bg-bg-dark/70 border border-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Approach</p>
                  <p className="text-gray-300 leading-relaxed">{project.approach}</p>
                </div>
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">Outcome</p>
                  <p className="text-gray-200 leading-relaxed">{project.outcome}</p>
                </div>
              </div>
              
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
                Explore repository
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
