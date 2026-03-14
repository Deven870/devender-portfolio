
function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-dark to-purple-500 bg-clip-text text-transparent animate-fade-in animate-pulse-slow">
          Hi, I'm Devender
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 animate-slide-up">
          Computer Science Undergraduate | Backend & ML Developer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Computer Science undergraduate (2022-2026) with experience in backend development, machine learning, and
          data-driven systems. Skilled in designing RESTful APIs, optimizing database performance, and building
          predictive models using Python and TensorFlow.
        </p>

        <p className="text-sm md:text-base text-gray-500 mb-8 animate-fade-in" style={{ animationDelay: '0.45s' }}>
          Greater Noida, India | +91 9987318617 | dev2004.rld@gmail.com
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com/Deven870" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 shadow-lg animate-pulse-slow"
          >
            <i className="fab fa-github mr-2"></i>
            View GitHub
          </a>
          
          <a 
            href="/resume.pdf" 
            download
            className="px-8 py-3 bg-bg-card border-2 border-primary text-white rounded-lg font-semibold hover:bg-primary hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <i className="fas fa-download mr-2"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
