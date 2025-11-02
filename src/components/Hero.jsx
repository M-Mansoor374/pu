const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '923289858413' // Format: 92 (country code) + 3289858413
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Greeting */}
            <div className="space-y-2 animate-fade-in">
              <p className="text-accent font-semibold text-base sm:text-lg tracking-wide">
                👋 Hello, I'm
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
              <span className="text-white">I'm </span>
              <span className="gradient-text">Muhammad Mansoor</span>
            </h1>

            {/* Role */}
            <div className="space-y-4 animate-slide-up-delay">
              <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                MERN Stack Developer
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                & Freelancer
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl lg:max-w-none animate-fade-in-delay">
              I build scalable, elegant full-stack web solutions for modern businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-fade-in-delay-2">
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full glass border-2 border-primary/30 text-white font-bold text-base sm:text-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Hire Me
              </button>
            </div>

            {/* Social Links or Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in-delay-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/70">Available for work</span>
              </div>
            </div>
          </div>

          {/* Right Content - Developer Illustration/Image */}
          <div className="hidden lg:flex items-center justify-center animate-float">
            <div className="relative">
              {/* Gradient Orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Developer Image Placeholder */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden glass border-4 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {/* You can replace this with an actual image */}
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">MM</span>
                    </div>
                    <p className="text-white/60 text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <TechBadge
                tech="React"
                position={{ top: '10%', right: '-10%' }}
                delay="0s"
              />
              <TechBadge
                tech="Node.js"
                position={{ bottom: '15%', left: '-10%' }}
                delay="0.5s"
              />
              <TechBadge
                tech="MongoDB"
                position={{ top: '50%', right: '-15%' }}
                delay="1s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tech Badge Component
const TechBadge = ({ tech, position, delay }) => {
  return (
    <div
      className="absolute glass rounded-lg px-4 py-2 shadow-lg animate-bounce"
      style={{
        ...position,
        animationDelay: delay,
        animationDuration: '3s',
      }}
    >
      <span className="text-white font-semibold text-sm">{tech}</span>
    </div>
  )
}

export default Hero

// Add CSS animations
const style = document.createElement('style')
style.textContent = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out 0.2s both;
  }

  .animate-slide-up-delay {
    animation: slide-up 0.8s ease-out 0.4s both;
  }

  .animate-fade-in-delay {
    animation: fade-in 0.8s ease-out 0.6s both;
  }

  .animate-fade-in-delay-2 {
    animation: fade-in 0.8s ease-out 0.8s both;
  }

  .animate-fade-in-delay-3 {
    animation: fade-in 0.8s ease-out 1s both;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`
document.head.appendChild(style)

