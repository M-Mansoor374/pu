import { useState } from 'react'

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null)

  const technologies = [
    {
      name: 'MongoDB',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path
            fill="#00ED64"
            d="M96.702 28.428c-8.512 1.054-13.638 2.126-17.924 3.166 5.852-17.632 7.732-29.758 7.732-29.758l.348-.558-.558.348c-2.089 1.142-25.958 14.258-38.51 41.493-1.106 2.475-3.583 7.813-3.583 7.813L33 62l-.965 1.869c-.348.696-5.578 14.548-5.578 27.647 0 12.675 4.174 23.779 11.338 32.835 1.731 2.089 3.166 3.755 3.166 3.755l.348.696h.348l.966-1.048c.348-.348 9.068-10.762 13.638-20.774 7.732-17.287 9.068-32.662 9.068-32.662l-4.174-8.851c-2.785 2.089-5.052 4.872-6.396 6.22l-.966 1.048c-.348.348-.696.348-.696-.348V98h.348l.348-.348c.348-.348 3.583-4.174 5.85-8.156.348-.696 8.51-17.287 8.51-17.287l.348-.696-.348-.696-3.446-10.414z"
          />
          <path
            fill="#00ED64"
            d="M33 62l10.762-22.391 18.29-4.174c-5.578-11.682-9.612-19.414-9.612-19.414h-.348c.348 0-4.088 10.936-10.762 23.146L33 62z"
          />
          <path
            fill="#00ED64"
            d="M102.245 73.661c.696-7.732 0-15.812-2.089-23.779-3.166-8.852-7.383-16.233-7.383-16.233l-8.51 14.718c-.696 1.391-1.044 2.785-1.044 2.785L74.028 62l10.762 21.695c.696 0 1.391.348 1.391.348l1.044-1.044c.348-.348 6.745-8.852 11.67-20.774 0 .348-.05-.584-.05-.584z"
          />
          <path
            fill="#00ED64"
            d="M78.09 42.649c2.089 7.732 5.578 16.93 5.85 17.287.348.348 1.391 1.392 1.739 2.089l-9.068 16.93c-.348-.348-.348-.696-.348-.696-.348-1.391-1.044-3.135-1.739-4.872l-8.51-14.718c-.348-.696-.348-1.044-.348-1.391 0-.696.348-1.392.696-2.089 2.785-6.745 7.038-13.99 10.762-17.714.348-.348.696-.696 1.044-.696.348 0 .696 0 1.044.348 0 0 5.578 6.396 10.414 13.641z"
          />
        </svg>
      ),
      color: '#00ED64',
    },
    {
      name: 'Express',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-white">
          <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.49-11.95-16.63-17.89-25-1.84-2.58-3.64-5.27-5.07-8.15-.56-1.16-1-2.38-1.74-4.17H45.12c-1.15 2.26-2 4.48-3.29 6.39-6.8 10-13.6 20-20.54 29.76a10.44 10.44 0 0 1-6.31 4.46c-1.88.44-4 .36-6.32-.24a14.88 14.88 0 0 1-2.53-1.07c.68-1.08 1.89-1.53 2.73-2.15C5.3 97.03 7 96 8.74 95.19c2.18-1 4.43-1.85 6.86-2.82l21.61 30.28c1.55 2.17 2.82 3.92 4.21 5.82a3 3 0 0 0 2.78 1 35.21 35.21 0 0 0 3.19-.62c1.08-.21 1.85-.62 2.49-1.7 8.72-14.82 17.26-29.73 25.9-44.53h8.89c.84 1.43 2.1 2.77 2.95 4.23 4.52 7.55 9.14 15 13.77 22.44 2.13 3.47 4.46 5.55 8.33 5.83 5.25.37 9.11-1.86 11.06-7.61l16.43-43.91 4.32-11.61c1.12-2.92 2-6 1.31-9.13-.3-1.44-.77-2.87-1.18-4.32l-2.92 1.89c-1.53 1-3.09 2-4.66 2.98-.11 1.85-.11 3.7-.11 5.54a36.59 36.59 0 0 1-1.18 9.37zm-7.1-10.84c-2.94 8-5.29 14.37-7.79 20.67-4 10-8.09 20-12.21 29.93-.44 1.09-.9 2.17-1.58 3.86 1.68-1.16 3.07-2.09 4.46-3.08l18.78-13.35c2.44-1.72 4.09-3.25 5-5.4a37.91 37.91 0 0 0 .77-5.36c0-1.69 0-3.36.15-5.23z" />
          <path d="M2.25 96.89c2.53.53 4.19.88 5.85 1.25a21 21 0 0 0 8.61.39l24.15-30.29c-3.41-5.45-6.54-10.46-9.82-15.69L6.74 75.62c-2.94 1.86-4.39 3.65-4.49 6.27zm39.17-48.86c4.19-7.47 7.36-13.1 10.43-18.52 4.86-8.61 9.54-16.86 14.32-25.22.78-1.37 1.51-3 2.82-5.61l-1.74 1.16c-7.4 5-14.58 9.74-21.7 14.62-1.46 1-2.9 1.94-4.8 3.23z" />
        </svg>
      ),
      color: '#FFFFFF',
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
          <path
            stroke="#61DAFB"
            strokeWidth="3.8"
            fill="none"
            d="M64 96c-26.51 0-48-5.373-48-12s21.49-12 48-12c26.51 0 48 5.373 48 12s-21.49 12-48 12z"
          />
          <path
            stroke="#61DAFB"
            strokeWidth="3.8"
            fill="none"
            d="M64 96c-26.51 0-48-5.373-48-12s21.49-12 48-12c26.51 0 48 5.373 48 12s-21.49 12-48 12z"
            transform="rotate(60 64 64)"
          />
          <path
            stroke="#61DAFB"
            strokeWidth="3.8"
            fill="none"
            d="M64 96c-26.51 0-48-5.373-48-12s21.49-12 48-12c26.51 0 48 5.373 48 12s-21.49 12-48 12z"
            transform="rotate(-60 64 64)"
          />
        </svg>
      ),
      color: '#61DAFB',
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path
            fill="#339933"
            d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1-4.9 1.2-7.4.2-3-.1-6-.5-8.9l-8.6 3.1c-.9-1.9-2-3.7-3.1-5.5l6.4-7.7c-1.3-1.8-2.6-3.5-4.1-5.1l-7.9 4.9c-1.4-1.2-2.8-2.3-4.3-3.4l3.6-8.7c-2-1.4-4.1-2.7-6.2-3.8l-9.3 1.8c-1.6-1-3.3-1.8-5-2.5l-2.1-9.5c-2.1-.5-4.3-.8-6.5-.9h-1.6c-2.3.1-4.5.4-6.7.9L43.2 8c-1.7.7-3.3 1.5-4.9 2.4l-9.5-2.3c-2.1 1.1-4.2 2.4-6.2 3.8l3.6 8.8c-1.5 1.1-2.9 2.2-4.3 3.4l-7.8-4.8c-1.5 1.6-2.9 3.3-4.1 5.1l6.4 7.7c-1.1 1.8-2.2 3.6-3.1 5.5l-8.7-3.1c-.4 2.9-.7 5.9-.5 8.9.2 2.4.6 4.9 1.2 7.4-2.4.7-4.7 1.5-6.9 2.3-3 .2-5.9.8-8.6 1.7l2.3 8.9c2.9-.8 6-1.3 9.1-1.5 0 2.8.4 5.6 1.2 8.2.8 2.6 1.9 5.1 3.3 7.4-2.6 1.1-5.1 2.4-7.5 3.8l6.4 7.7c2 1.3 4.2 2.5 6.6 3.5.9 1.8 2 3.5 3.2 5l-6.4 7.7c1.5 1.8 3.1 3.4 4.8 4.9 1.4-1.2 2.9-2.3 4.4-3.3l7.7 6.5c.8-2.5 1.8-5 2.9-7.4 1.2-2.4 2.5-4.7 4-6.9-2.6-1.2-5.1-2.6-7.5-4l-6.4-7.7c-2.7.8-5.3 1.9-7.8 3.1.6-3.1 1-6.3 1-9.6l-8.9-2.3c-1.4-2.2-2.6-4.5-3.7-6.9l11.3-4.3c-1.1-2.4-1.9-4.9-2.6-7.4l-10.9.7c-.5-2.4-.8-4.8-.9-7.3l10.3-5.8c.8-2.4 1.9-4.7 3.1-6.9l-9.1-6.4c.9-2.2 2-4.3 3.2-6.3l12.3.6c1.3-2.2 2.7-4.3 4.3-6.3l-7.6-9.2c1.4-1.9 2.9-3.7 4.5-5.4l10.5 6.1c1.9-1.9 4-3.6 6.2-5.2l-5-11.1c1.9-1.3 3.8-2.4 5.8-3.5l12.8 7.3c2.1-1.3 4.3-2.4 6.6-3.4l-1.9-12.8c2.1-.8 4.3-1.5 6.5-2l10.5 11.1c1.1-.5 2.1-1 3.2-1.5l2.1-13.1c2.2-.4 4.5-.6 6.8-.6 2.3 0 4.6.2 6.8.6l2 13.1c1.1.5 2.2 1 3.2 1.5l10.7-11.1c2.2.5 4.4 1.2 6.5 2l-1.9 12.8c2.3.9 4.5 2 6.6 3.4l12.8-7.3c2 1.1 3.9 2.2 5.8 3.5L86 8.3c2.2 1.6 4.3 3.3 6.2 5.2l10.5-6.1c1.6 1.7 3.1 3.5 4.5 5.4L100.2 10c1.6 2 3 4.1 4.3 6.3l12.3-.6c1.2 2 2.3 4.1 3.2 6.3L111 23.4c1.2 2.2 2.3 4.5 3.1 6.9l10.3 5.8c-.1 2.5-.4 4.9-.9 7.3l-10.9-.7c-.7 2.5-1.5 5-2.6 7.4l11.3 4.3c-1.1 2.4-2.3 4.7-3.7 6.9l-8.9 2.3c0 3.3.4 6.5 1 9.6-2.5-1.2-5.1-2.3-7.8-3.1l-6.4 7.7c-2.4 1.4-4.9 2.8-7.5 4 1.5 2.2 2.8 4.5 4 6.9 1.1 2.4 2.1 4.9 2.9 7.4l7.7-6.5c1.5 1 3 2.1 4.4 3.3 1.7-1.5 3.3-3.1 4.8-4.9l-6.4-7.7c1.2-1.5 2.3-3.2 3.2-5 2.4-1 4.6-2.2 6.6-3.5l6.4-7.7c-2.4-1.4-4.9-2.7-7.5-3.8 1.4-2.3 2.5-4.8 3.3-7.4.8-2.6 1.2-5.4 1.2-8.2 3.1.2 6.2.7 9.1 1.5l2.3-8.9c-2.7-.9-5.6-1.5-8.6-1.7zM64 87.3c-12.9 0-23.3-10.4-23.3-23.3S51.1 40.7 64 40.7s23.3 10.4 23.3 23.3S76.9 87.3 64 87.3z"
          />
        </svg>
      ),
      color: '#339933',
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path
            fill="#06B6D4"
            d="M64 96c-28 0-49.6-12.6-49.6-28.8 0-5 2.8-9.6 7.5-13.4l.2-.1c-1.4-1.9-2.1-4.2-2.1-6.5 0-7.8 6.3-14.2 14.2-14.2 4.1 0 7.8 1.8 10.3 4.7.6.7 1.3 1.4 2.1 2-.4-3 .6-5.9 2.9-8.4 5.3-5.9 14-5.9 14-5.9s8.6 0 13.9 5.9c2.3 2.6 3.3 5.5 2.9 8.5.8-.6 1.5-1.2 2.2-1.9 2.5-2.9 6.2-4.7 10.3-4.7 7.9 0 14.2 6.4 14.2 14.2 0 2.3-.8 4.6-2.1 6.5l.2.1c4.7 3.8 7.5 8.4 7.5 13.4C113.6 83.4 92 96 64 96z"
          />
        </svg>
      ),
      color: '#06B6D4',
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-white">
          <path
            fillRule="evenodd"
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.705-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          />
        </svg>
      ),
      color: '#FFFFFF',
    },
  ]

  return (
    <section
      id="tech-stack"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background gradient blob */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">
            My Tech Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto font-body px-2">
            Tools and technologies I use to craft scalable and modern web
            applications.
          </p>
        </div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <TechIcon
              key={tech.name}
              tech={tech}
              index={index}
              isHovered={hoveredTech === tech.name}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Individual Tech Icon Component
const TechIcon = ({ tech, index, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`group relative flex flex-col items-center justify-center tech-float-${index}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Glassmorphic Container */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Glowing shadow behind icon */}
        <div
          className={`absolute inset-0 rounded-2xl transition-all duration-500 ease-out ${
            isHovered
              ? 'bg-gradient-to-br from-white/20 to-transparent scale-110'
              : 'bg-gradient-to-br from-white/5 to-transparent scale-100'
          }`}
          style={{
            filter: isHovered ? `blur(10px) drop-shadow(0 0 20px ${tech.color}40)` : 'blur(5px)',
          }}
        />

        {/* Icon Container */}
        <div
          className={`relative glass rounded-2xl w-full h-full flex items-center justify-center transition-all duration-300 ease-out cursor-pointer ${
            isHovered
              ? 'transform -translate-y-2 scale-105 shadow-2xl'
              : 'transform translate-y-0 scale-100 shadow-lg'
          }`}
          style={{
            borderColor: isHovered ? `${tech.color}80` : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered
              ? `0 20px 40px -10px ${tech.color}40, inset 0 0 20px ${tech.color}20`
              : '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Icon */}
          <div
            className={`transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          >
            {tech.icon}
          </div>

          {/* Pulse animation on hover */}
          {isHovered && (
            <div
              className="absolute inset-0 rounded-2xl border-2 animate-ping"
              style={{
                borderColor: tech.color,
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
          )}
        </div>
      </div>

      {/* Tech Name */}
      <div
        className={`mt-4 font-semibold text-center transition-all duration-300 ${
          isHovered ? 'text-white scale-105' : 'text-white/70 scale-100'
        }`}
      >
        {tech.name}
      </div>
    </div>
  )
}

export default TechStack

