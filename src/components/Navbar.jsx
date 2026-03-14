import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-card/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Devender
          </div>
          
          <ul className="hidden md:flex space-x-8">
            <li>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('coding')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Coding
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('credentials')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Credentials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary transition-colors duration-200">
                Contact
              </button>
            </li>
            <li>
              <a href="https://github.com/Deven870" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-200">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
