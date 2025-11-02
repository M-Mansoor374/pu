import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping platform with cart, payments, and admin dashboard',
      image: '/project-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution to compete with larger retailers.',
      solution: 'Built a custom MERN platform with real-time inventory, secure payments via Stripe, and an intuitive admin dashboard for managing products and orders.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
    {
      id: 2,
      title: 'POS Management System',
      description: 'Restaurant management system with order tracking and analytics',
      image: '/project-2.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
      liveUrl: 'https://demo-pos.com',
      githubUrl: 'https://github.com/username/pos-system',
      problem: 'Restaurants needed a unified system to manage orders, inventory, and sales reports.',
      solution: 'Developed a comprehensive POS system with real-time order updates, inventory management, and detailed analytics dashboard for business insights.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task tracker with real-time updates and team features',
      image: '/project-3.jpg',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: 'https://demo-tasks.com',
      githubUrl: 'https://github.com/username/task-manager',
      problem: 'Teams struggled with coordination and project tracking across remote work environments.',
      solution: 'Created a real-time collaborative task manager with Socket.io for live updates, drag-and-drop kanban boards, and team workspaces.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
    {
      id: 4,
      title: 'Blog CMS Platform',
      description: 'Content management system with markdown editor and SEO optimization',
      image: '/project-4.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Markdown'],
      liveUrl: 'https://demo-blog.com',
      githubUrl: 'https://github.com/username/blog-cms',
      problem: 'Content creators needed a simple yet powerful CMS with SEO features.',
      solution: 'Built a modern CMS with a markdown editor, automatic SEO meta tags, and advanced analytics for content performance tracking.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media engagement metrics',
      image: '/project-5.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://demo-social.com',
      githubUrl: 'https://github.com/username/social-dashboard',
      problem: 'Businesses needed a centralized platform to track and analyze multiple social media accounts.',
      solution: 'Developed an analytics dashboard with real-time data visualization, cross-platform metrics, and customizable reports using Chart.js.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'Workout tracking app with progress monitoring and nutrition logs',
      image: '/project-6.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'API'],
      liveUrl: 'https://demo-fitness.com',
      githubUrl: 'https://github.com/username/fitness-tracker',
      problem: 'Fitness enthusiasts needed a comprehensive app to track workouts, calories, and progress.',
      solution: 'Created a full-stack fitness tracker with workout libraries, nutrition logging, progress charts, and personalized recommendations.',
      screenshots: ['/screenshot1.jpg', '/screenshot2.jpg', '/screenshot3.jpg'],
      videoUrl: '',
    },
  ]

  return (
    <>
      <section id="projects" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto font-body px-2">
              A showcase of the web solutions I've built — from concept to deployment.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

// Project Card Component
const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Main Card */}
      <div
        className={`relative overflow-hidden rounded-2xl glass transition-all duration-300 ${
          isHovered
            ? 'transform -translate-y-2 shadow-2xl shadow-primary/20'
            : 'shadow-lg'
        }`}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-white/60 text-sm">Project Screenshot</p>
              </div>
            </div>
          </div>
          <div
            className={`absolute inset-0 transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          >
            {/* Placeholder for actual screenshot */}
          </div>
        </div>

        {/* Overlay - Visible on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white font-heading">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/30 border border-primary/50 rounded-full text-xs font-semibold text-white uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Case Study Button */}
            <div className="pt-2">
              <button
                className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Default Content - Visible when not hovering */}
        <div className={`p-6 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="text-xl font-bold text-white mb-2 font-heading">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm">
            {project.description}
          </p>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 border-primary' : 'opacity-0'
        }`}
      />
    </div>
  )
}

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '923289858413'
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-modal-in">
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 animate-modal-in shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto max-h-[95vh]">
          {/* Header with Icon and Title */}
          <div className="p-8 border-b border-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1 font-heading">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* The Challenge */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">The Challenge</h3>
              </div>
              <p className="text-white/80 leading-relaxed pl-11">
                {project.problem}
              </p>
            </div>

            {/* Our Solution */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Our Solution</h3>
              </div>
              <p className="text-white/80 leading-relaxed pl-11">
                {project.solution}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-11">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-8 border-t border-gray-700 bg-gray-900/50">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-white text-lg font-semibold">
                Ready to start your project?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop Click to Close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}

export default Projects

