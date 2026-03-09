import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Skills() {
  const [ref, isVisible] = useScrollAnimation()
  
  const skills = [
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
    { name: 'Machine Learning', icon: 'fas fa-brain', color: 'text-purple-400' },
    { name: 'TensorFlow', icon: 'fas fa-project-diagram', color: 'text-orange-400' },
    { name: 'FastAPI', icon: 'fas fa-bolt', color: 'text-green-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: 'text-blue-600' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-green-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-yellow-400' },
  ]

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <i className={`${skill.icon} text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`}></i>
                <h3 className="text-gray-200 font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
