import React, { useState, useEffect } from 'react'

const AboutMe = () => {
  const coreSkills = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'Node.js', icon: '🚀', level: 85 },
    { name: 'MongoDB', icon: '🍃', level: 80 },
    { name: 'Express', icon: '🧩', level: 75 },
    { name: 'REST APIs', icon: '🌐', level: 85 },
    { name: 'Tailwind CSS', icon: '🎨', level: 90 },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-accent/30 to-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in">
            <ProfileImage />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 animate-slide-up-delay">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
              About <span className="gradient-text">Me</span>
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Muhammad Mansoor</span>, 
                a passionate MERN Stack Developer and freelancer who loves turning 
                ideas into dynamic web experiences. I focus on building fast, secure, 
                and scalable full-stack applications tailored for modern businesses.
              </p>
              
              <p>
                I specialize in full-stack JavaScript development using MongoDB, 
                Express, React, and Node.js, with a strong focus on clean code and performance.
              </p>
            </div>

            {/* Core Skills Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white">
                Core Skills
              </h3>
              
              {/* Skill Progress Bars */}
              <div className="space-y-3">
                {coreSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Profile Image Component with Hover Effects
const ProfileImage = () => {
  return (
    <div className="relative group">
      {/* Glowing orb behind image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
      
      {/* Profile Image Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-2xl">
        {/* Placeholder for actual profile image */}
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
              <span className="text-6xl md:text-7xl font-bold text-white">
                MM
              </span>
            </div>
            <p className="text-white/60 text-sm">Your Photo Here</p>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Animated ring on hover */}
        <div className="absolute inset-0 border-2 border-primary/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
      </div>

      {/* Floating badges */}
      <FloatingBadge 
        emoji="💻" 
        position={{ top: '10%', right: '-5%' }}
        delay="0s"
      />
      <FloatingBadge 
        emoji="🚀" 
        position={{ bottom: '15%', left: '-5%' }}
        delay="0.5s"
      />
    </div>
  )
}

// Floating Badge Component
const FloatingBadge = ({ emoji, position, delay }) => {
  return (
    <div
      className="absolute glass rounded-full p-3 shadow-lg animate-bounce"
      style={{
        ...position,
        animationDelay: delay,
        animationDuration: '3s',
      }}
    >
      <span className="text-2xl">{emoji}</span>
    </div>
  )
}

// Skill Bar Component
const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)
    
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="space-y-2">
      {/* Skill Label */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-white font-semibold">
          <span className="text-lg">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-accent font-bold">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className={`absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'w-full' : 'w-0'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            boxShadow: isVisible
              ? `0 0 10px ${skill.level > 80 ? 'rgba(108, 99, 255, 0.5)' : 'rgba(0, 201, 167, 0.5)'}`
              : 'none',
          }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

