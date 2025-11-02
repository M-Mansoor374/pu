import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Muhammad delivered our project ahead of schedule with exceptional code quality. The entire development process was smooth and transparent. Highly recommend!",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "SJ", // Initials for avatar
      hasPhoto: false,
    },
    {
      id: 2,
      quote: "Working with Muhammad was a game-changer for our business. His MERN expertise brought our vision to life with clean, scalable architecture. Simply outstanding!",
      name: "Ahmed Al-Rashid",
      role: "Product Manager",
      company: "InnovateHub",
      avatar: "AR",
      hasPhoto: false,
    },
    {
      id: 3,
      quote: "The best freelancer we've worked with. Muhammad's attention to detail and commitment to excellence is unmatched. Our users love the final product!",
      name: "Emily Chen",
      role: "Founder",
      company: "CloudScale Solutions",
      avatar: "EC",
      hasPhoto: false,
    },
    {
      id: 4,
      quote: "Professional, reliable, and incredibly skilled. Muhammad transformed our outdated system into a modern, efficient platform. Worth every investment!",
      name: "Michael Torres",
      role: "CTO",
      company: "DataFlow Analytics",
      avatar: "MT",
      hasPhoto: false,
    },
    {
      id: 5,
      quote: "From concept to deployment, Muhammad exceeded our expectations. His technical expertise and communication skills made collaboration seamless.",
      name: "Priya Sharma",
      role: "VP of Engineering",
      company: "NextGen Labs",
      avatar: "PS",
      hasPhoto: false,
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleLetsWorkClick = () => {
    // Open WhatsApp chat
    const phoneNumber = '923289858413'
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-green-900/20 via-green-800/20 to-teal-900/20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-600/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-600/20 to-green-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-2 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 font-heading">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 font-body px-2">
            What my clients say about working with me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Testimonial Cards Container */}
          <div className="relative min-h-[400px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[380px] mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 md:-translate-x-8 lg:-translate-x-12 p-2 sm:p-3 glass rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-300 z-10 touch-manipulation"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 md:translate-x-8 lg:translate-x-12 p-2 sm:p-3 glass rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-300 z-10 touch-manipulation"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full touch-manipulation ${
                  index === currentIndex
                    ? 'w-10 sm:w-12 h-2 bg-gradient-to-r from-primary to-accent'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50 active:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-delay px-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 font-heading">
            Ready to be my next happy client?
          </p>
          <button
            onClick={handleLetsWorkClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group border-2 border-transparent hover:border-white/30 touch-manipulation"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Let's Work Together
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
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
        isActive
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-4 sm:translate-x-8 scale-95 pointer-events-none'
      }`}
    >
      <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-full flex flex-col items-center justify-center group">
        {/* Quote Icon */}
        <div className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl text-primary/30">"</div>

        {/* Testimonial Quote */}
        <blockquote className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 italic text-center mb-6 sm:mb-8 font-body leading-relaxed max-w-2xl px-2">
          {testimonial.quote}
        </blockquote>

        {/* Client Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
          {/* Avatar */}
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-lg">
              {testimonial.avatar}
            </div>
            {/* Pulsing ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
          </div>

          {/* Client Details */}
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base sm:text-lg md:text-xl font-heading">
              {testimonial.name}
            </p>
            <p className="text-white/70 text-xs sm:text-sm md:text-base font-body">
              {testimonial.role}
            </p>
            <p className="text-white/50 text-xs sm:text-sm font-body italic">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl md:text-4xl text-primary/10">"</div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-2xl sm:text-3xl md:text-4xl text-accent/10">"</div>
      </div>
    </div>
  )
}

export default Testimonials

