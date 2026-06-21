'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-12">Have a project in mind? Let's collaborate and build something amazing together.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          <a
            href="mailto:oscar@example.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-gray-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
