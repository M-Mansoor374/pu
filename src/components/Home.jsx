import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import TechStack from './TechStack'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Gradient Blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full animated-gradient opacity-20"></div>
        <ParticleBackground />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Tech Stack Banner */}
      <TechStack />
      
      {/* About Me Section */}
      <AboutMe />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
    </div>
  )
}

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 20,
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Home

// Add floating animation
const style = document.createElement('style')
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: translate(20px, -20px) rotate(180deg);
      opacity: 0.5;
    }
  }
`
document.head.appendChild(style)

