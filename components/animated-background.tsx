"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circles: Circle[] = []
    const isDark = theme === "dark"

    class Circle {
      x: number
      y: number
      radius: number
      dx: number
      dy: number
      color: string

      constructor(x: number, y: number, radius: number, dx: number, dy: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = dx
        this.dy = dy
        this.color = color
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
      }
    }

    // Create circles
    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 60 + 20
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      const dx = (Math.random() - 0.5) * 0.5
      const dy = (Math.random() - 0.5) * 0.5

      // Colors based on theme
      const colors = isDark
        ? ["rgba(99, 102, 241, 0.1)", "rgba(79, 70, 229, 0.1)", "rgba(67, 56, 202, 0.1)"]
        : ["rgba(79, 70, 229, 0.1)", "rgba(99, 102, 241, 0.1)", "rgba(129, 140, 248, 0.1)"]

      const color = colors[Math.floor(Math.random() * colors.length)]

      circles.push(new Circle(x, y, radius, dx, dy, color))
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach((circle) => {
        circle.update()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

