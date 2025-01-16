'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set initial canvas size
    const setCanvasSize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      width: number
      height: number

      constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around screen edges
        if (this.x > this.width) this.x = 0
        else if (this.x < 0) this.x = this.width
        if (this.y > this.height) this.y = 0
        else if (this.y < 0) this.y = this.height
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'rgba(255, 121, 0, 0.1)'
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
    }

    const particles: Particle[] = []
    const particleCount = 100

    // Initialize particles
    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }
    initParticles()

    let animationFrameId: number

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (const particle of particles) {
        particle.update()
        particle.draw(ctx)
      }
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      setCanvasSize()
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" />
}

