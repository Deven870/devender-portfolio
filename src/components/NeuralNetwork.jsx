import { useEffect, useRef } from 'react'

function NeuralNetwork() {
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

    // Neural Network Configuration
    const layers = 4 // Number of layers in the network
    const nodesPerLayer = window.innerWidth < 768 ? 5 : 8
    const nodes = []
    const connections = []

    // Node class
    class Node {
      constructor(x, y, layer) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.layer = layer
        this.radius = Math.random() * 3 + 3
        this.pulsePhase = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.02 + Math.random() * 0.02
        this.active = Math.random() > 0.7
        this.activation = this.active ? 1 : 0
      }

      update() {
        // Pulse animation
        this.pulsePhase += this.pulseSpeed
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7

        // Smooth activation transition
        if (this.active) {
          this.activation = Math.min(1, this.activation + 0.02)
        } else {
          this.activation = Math.max(0, this.activation - 0.02)
        }

        // Random activation changes
        if (Math.random() < 0.01) {
          this.active = !this.active
        }

        // Gentle floating movement
        this.x = this.baseX + Math.sin(Date.now() * 0.0003 + this.layer) * 10
        this.y = this.baseY + Math.cos(Date.now() * 0.0004 + this.layer) * 10

        return pulse
      }

      draw(pulse) {
        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3)
        
        const colors = [
          { r: 102, g: 126, b: 234 },  // primary blue
          { r: 240, g: 147, b: 251 },  // pink
          { r: 245, g: 87, b: 108 },   // red
        ]
        
        const color = colors[this.layer % colors.length]
        const opacity = 0.3 + this.activation * 0.5

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * pulse})`)
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * pulse * 0.3})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.8 + this.activation * 0.2})`
        ctx.fill()
      }
    }

    // Create nodes in layers
    const spacing = canvas.width / (layers + 1)
    for (let layer = 0; layer < layers; layer++) {
      const x = spacing * (layer + 1)
      const layerHeight = canvas.height
      const nodeSpacing = layerHeight / (nodesPerLayer + 1)

      for (let i = 0; i < nodesPerLayer; i++) {
        const y = nodeSpacing * (i + 1)
        nodes.push(new Node(x, y, layer))
      }
    }

    // Create connections between layers
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = nodes.filter(n => n.layer === layer)
      const nextLayerNodes = nodes.filter(n => n.layer === layer + 1)

      currentLayerNodes.forEach(node1 => {
        nextLayerNodes.forEach(node2 => {
          if (Math.random() > 0.3) { // 70% connection probability
            connections.push({
              from: node1,
              to: node2,
              weight: Math.random(),
              pulsePhase: Math.random() * Math.PI * 2,
              pulseSpeed: 0.03 + Math.random() * 0.02
            })
          }
        })
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      connections.forEach(conn => {
        const signal = (Math.sin(conn.pulsePhase) + 1) * 0.5
        conn.pulsePhase += conn.pulseSpeed

        const gradient = ctx.createLinearGradient(
          conn.from.x, conn.from.y,
          conn.to.x, conn.to.y
        )

        const fromActivation = conn.from.activation
        const toActivation = conn.to.activation
        const activation = (fromActivation + toActivation) / 2

        gradient.addColorStop(0, `rgba(102, 126, 234, ${0.1 + activation * 0.3})`)
        gradient.addColorStop(signal, `rgba(240, 147, 251, ${0.3 + activation * 0.5})`)
        gradient.addColorStop(1, `rgba(245, 87, 108, ${0.1 + activation * 0.3})`)

        ctx.beginPath()
        ctx.moveTo(conn.from.x, conn.from.y)
        ctx.lineTo(conn.to.x, conn.to.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5 + conn.weight * 1.5 * activation
        ctx.stroke()

        // Draw signal pulse
        if (activation > 0.5) {
          const pulseX = conn.from.x + (conn.to.x - conn.from.x) * signal
          const pulseY = conn.from.y + (conn.to.y - conn.from.y) * signal

          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(240, 147, 251, ${activation})`
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(240, 147, 251, 0.8)'
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Draw nodes
      nodes.forEach(node => {
        const pulse = node.update()
        node.draw(pulse)
      })

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
      className="fixed inset-0 -z-10 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default NeuralNetwork
