import AnimatedBackground from './components/AnimatedBackground'
import Contact from './components/Contact'
import Experience from './components/Experience'
import GithubStats from './components/GithubStats'
import Hero from './components/Hero'
import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import NeuralNetwork from './components/NeuralNetwork'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import VoiceWelcome from './components/VoiceWelcome'

function App() {
  return (
    <div className="min-h-screen bg-bg-dark relative overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <MatrixRain />
      <NeuralNetwork />
      <VoiceWelcome />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  )
}

export default App
