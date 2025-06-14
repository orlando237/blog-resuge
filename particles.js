// Responsive Animated Particles Background System
class ParticleSystem {
  constructor() {
    this.particles = []
    this.canvas = null
    this.ctx = null
    this.animationId = null
    this.isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    this.init()
  }

  init() {
    if (this.isReducedMotion) {
      console.log("Reduced motion detected, skipping particle system")
      return
    }

    this.createCanvas()
    this.createParticles()
    this.animate()
    this.handleResize()
  }

  createCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.style.position = "fixed"
    this.canvas.style.top = "0"
    this.canvas.style.left = "0"
    this.canvas.style.width = "100%"
    this.canvas.style.height = "100%"
    this.canvas.style.pointerEvents = "none"
    this.canvas.style.zIndex = "-2"
    this.canvas.style.opacity = "0.6"

    this.ctx = this.canvas.getContext("2d")
    this.resizeCanvas()

    const particlesContainer = document.querySelector(".particles-container")
    if (particlesContainer) {
      particlesContainer.appendChild(this.canvas)
    }
  }

  resizeCanvas() {
    const dpr = window.devicePixelRatio || 1
    const rect = { width: window.innerWidth, height: window.innerHeight }

    this.canvas.width = rect.width * dpr
    this.canvas.height = rect.height * dpr
    this.canvas.style.width = rect.width + "px"
    this.canvas.style.height = rect.height + "px"

    this.ctx.scale(dpr, dpr)
  }

  createParticles() {
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30))
    this.particles = []

    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: this.getRandomColor(),
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }
  }

  getRandomColor() {
    const colors = ["#3498db", "#2980b9", "#5dade2", "#85c1e9"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  updateParticles() {
    this.particles.forEach((particle) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Update pulse
      particle.pulse += particle.pulseSpeed
      particle.currentSize = particle.size + Math.sin(particle.pulse) * 0.5

      // Wrap around screen
      if (particle.x > window.innerWidth) particle.x = 0
      if (particle.x < 0) particle.x = window.innerWidth
      if (particle.y > window.innerHeight) particle.y = 0
      if (particle.y < 0) particle.y = window.innerHeight
    })
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.particles.forEach((particle) => {
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.currentSize, 0, Math.PI * 2)
      this.ctx.fillStyle = particle.color
      this.ctx.globalAlpha = particle.opacity
      this.ctx.fill()
    })

    this.ctx.globalAlpha = 1
  }

  drawConnections() {
    const connectionDistance = 100

    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach((otherParticle) => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
        )

        if (distance < connectionDistance) {
          this.ctx.beginPath()
          this.ctx.moveTo(particle.x, particle.y)
          this.ctx.lineTo(otherParticle.x, otherParticle.y)
          this.ctx.strokeStyle = "#3498db"
          this.ctx.globalAlpha = ((connectionDistance - distance) / connectionDistance) * 0.2
          this.ctx.stroke()
        }
      })
    })
    this.ctx.globalAlpha = 1
  }

  animate() {
    this.updateParticles()
    this.drawParticles()
    this.drawConnections()
    this.animationId = requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    window.addEventListener("resize", () => {
      this.resizeCanvas()
      this.createParticles()
    })
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas)
    }
  }
}

// Mouse interaction effects
class MouseEffects {
  constructor() {
    this.trails = []
    this.canvas = null
    this.ctx = null
    this.animationId = null
    this.isTouch = "ontouchstart" in window
    this.isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!this.isReducedMotion && !this.isTouch) {
      this.init()
    }
  }

  init() {
    this.createCanvas()
    this.addMouseListeners()
    this.animate()
  }

  createCanvas() {
    this.canvas = document.createElement("canvas")
    this.canvas.style.position = "fixed"
    this.canvas.style.top = "0"
    this.canvas.style.left = "0"
    this.canvas.style.width = "100%"
    this.canvas.style.height = "100%"
    this.canvas.style.pointerEvents = "none"
    this.canvas.style.zIndex = "999"

    this.ctx = this.canvas.getContext("2d")

    const dpr = window.devicePixelRatio || 1
    this.canvas.width = window.innerWidth * dpr
    this.canvas.height = window.innerHeight * dpr
    this.canvas.style.width = window.innerWidth + "px"
    this.canvas.style.height = window.innerHeight + "px"
    this.ctx.scale(dpr, dpr)

    document.body.appendChild(this.canvas)
  }

  addMouseListeners() {
    let lastMoveTime = 0
    const throttleDelay = 16 // ~60fps

    document.addEventListener("mousemove", (e) => {
      const now = Date.now()
      if (now - lastMoveTime < throttleDelay) return
      lastMoveTime = now

      this.trails.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        decay: 0.03,
      })

      // Limit trail length for performance
      if (this.trails.length > 15) {
        this.trails.shift()
      }
    })

    let resizeTimeout
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const dpr = window.devicePixelRatio || 1
        this.canvas.width = window.innerWidth * dpr
        this.canvas.height = window.innerHeight * dpr
        this.canvas.style.width = window.innerWidth + "px"
        this.canvas.style.height = window.innerHeight + "px"
        this.ctx.scale(dpr, dpr)
      }, 250)
    })
  }

  animate() {
    if (this.isReducedMotion) return

    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.trails = this.trails.filter((trail) => {
      trail.life -= trail.decay

      if (trail.life > 0) {
        this.ctx.beginPath()
        this.ctx.arc(trail.x, trail.y, 3, 0, Math.PI * 2)
        this.ctx.fillStyle = `rgba(52, 152, 219, ${trail.life * 0.3})`
        this.ctx.fill()
        return true
      }
      return false
    })

    this.animationId = requestAnimationFrame(() => this.animate())
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas)
    }
  }
}

// Utility function for creating click ripple effects
function createRipple(element, event) {
  // Skip ripple on touch devices for better performance
  if ("ontouchstart" in window) return

  const ripple = document.createElement("div")
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)

  ripple.style.position = "absolute"
  ripple.style.borderRadius = "50%"
  ripple.style.background = "rgba(52, 152, 219, 0.3)"
  ripple.style.transform = "scale(0)"
  ripple.style.animation = "rippleEffect 0.6s linear"
  ripple.style.left = event.clientX - rect.left - size / 2 + "px"
  ripple.style.top = event.clientY - rect.top - size / 2 + "px"
  ripple.style.width = ripple.style.height = size + "px"
  ripple.style.pointerEvents = "none"

  element.style.position = "relative"
  element.style.overflow = "hidden"
  element.appendChild(ripple)

  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple)
    }
  }, 600)
}

// Initialize particle systems when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (!prefersReducedMotion) {
    const particleSystem = new ParticleSystem()
    const mouseEffects = new MouseEffects()

    // Add ripple effect to buttons (throttled for performance)
    const buttons = document.querySelectorAll("button, .presentation-card, .blog-card")
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        createRipple(button, e)
      })
    })

    console.log("🎉 Particle systems initialized successfully!")
    console.log("✨ Mouse trail effects activated!")
  } else {
    console.log("🎯 Reduced motion detected - particle effects disabled")
  }
})

// CSS for ripple animation
const rippleCSS = `
@keyframes rippleEffect {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

/* Reduce animations on mobile for better performance */
@media (max-width: 768px) {
    @keyframes rippleEffect {
        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    @keyframes rippleEffect {
        to {
            transform: scale(1);
            opacity: 0;
        }
    }
}
`

const style = document.createElement("style")
style.textContent = rippleCSS
document.head.appendChild(style)
