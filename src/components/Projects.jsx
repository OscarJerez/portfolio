'use client'

export default function Projects() {
  const projects = [
    {
      title: 'AsyncGuard',
      description: 'Async task recovery SaaS platform for managing and monitoring asynchronous operations with automatic retry mechanisms.',
      tech: ['C#', 'Node.js', 'SQL'],
    },
    {
      title: 'PersonalAgent',
      description: 'AI copilot for developers. An intelligent assistant that helps with code generation, debugging, and development workflows.',
      tech: ['JavaScript', 'React.js', 'Node.js'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
