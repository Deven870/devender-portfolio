import AnimatedBackground from './components/AnimatedBackground'
import CodingEvidence from './components/CodingEvidence'
import Contact from './components/Contact'
import Credentials from './components/Credentials'
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
      <CodingEvidence />
      <Credentials />
      <Experience />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  )
}

export default App
