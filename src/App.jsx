import AnimatedBackground from './components/AnimatedBackground'
import Contact from './components/Contact'
import GithubStats from './components/GithubStats'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  )
}

export default App
