import { useEffect, useRef } from 'react'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix rain configuration
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height
    }

    // Characters to use (binary + some AI/ML terms)
    const chars = '01'
    const aiChars = 'AIML∑∫αβγδθ∞'
    
    // Animation loop
    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw drops
      for (let i = 0; i < drops.length; i++) {
        // Randomly pick character
        const isSpecial = Math.random() > 0.95
        const text = isSpecial 
          ? aiChars[Math.floor(Math.random() * aiChars.length)]
          : chars[Math.floor(Math.random() * chars.length)]

        // Color gradient based on position
        const gradient = ctx.createLinearGradient(0, drops[i], 0, drops[i] + fontSize)
        
        if (isSpecial) {
          gradient.addColorStop(0, 'rgba(240, 147, 251, 0.8)')
          gradient.addColorStop(1, 'rgba(102, 126, 234, 0.3)')
        } else {
          gradient.addColorStop(0, 'rgba(102, 126, 234, 0.5)')
          gradient.addColorStop(1, 'rgba(102, 126, 234, 0.1)')
        }

        ctx.fillStyle = gradient
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, i * fontSize, drops[i])

        // Reset drop to top randomly
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop
        drops[i] += fontSize
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-5 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default MatrixRain
