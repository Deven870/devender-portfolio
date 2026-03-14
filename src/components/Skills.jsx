import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Skills() {
  const [ref, isVisible] = useScrollAnimation()
  
  const skills = [
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
    { name: 'SQL', icon: 'fas fa-database', color: 'text-blue-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-400' },
    { name: 'C', icon: 'fas fa-code', color: 'text-slate-300' },
    { name: 'Django', icon: 'fas fa-server', color: 'text-green-500' },
    { name: 'TensorFlow', icon: 'fas fa-project-diagram', color: 'text-orange-400' },
    { name: 'Keras', icon: 'fas fa-network-wired', color: 'text-red-400' },
    { name: 'OpenCV', icon: 'fas fa-camera', color: 'text-pink-400' },
    { name: 'scikit-learn', icon: 'fas fa-robot', color: 'text-amber-400' },
    { name: 'Pandas', icon: 'fas fa-table', color: 'text-cyan-400' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-green-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
    { name: 'Linux', icon: 'fab fa-linux', color: 'text-yellow-400' },
    { name: 'Machine Learning', icon: 'fas fa-brain', color: 'text-purple-400' },
    { name: 'Computer Vision', icon: 'fas fa-eye', color: 'text-indigo-400' },
    { name: 'Data Structures', icon: 'fas fa-sitemap', color: 'text-emerald-400' },
    { name: 'OOP', icon: 'fas fa-cubes', color: 'text-fuchsia-400' },
    { name: 'Operating Systems', icon: 'fas fa-microchip', color: 'text-gray-300' },
    { name: 'System Design', icon: 'fas fa-drafting-compass', color: 'text-violet-400' },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-bg-card p-6 rounded-xl border border-gray-700 hover:border-primary hover:scale-110 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <i className={`${skill.icon} text-5xl mb-3 ${skill.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}></i>
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
