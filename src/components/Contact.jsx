'use client'

import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
          I'm actively looking for my first junior developer role. If you have an open
          position or just want to chat about a project — reach out.
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-12">
          <MapPin size={14} />
          <span>Göteborg, Sverige · Open to hybrid & remote</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          <a href="mailto:oscj87@gmail.com" className="flex flex-col items-center gap-3 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 text-white font-semibold py-6 px-4 rounded-xl transition-all duration-300">
            <Mail size={24} />
            <span className="text-sm">Email</span>
          </a>
          <a href="https://github.com/OscarJerez" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold py-6 px-4 rounded-xl transition-all duration-300">
            <Github size={24} />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/oscar-jerez-arias-555b91347" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-gray-800 hover:bg-blue-700 border border-gray-700 hover:border-blue-500 text-white font-semibold py-6 px-4 rounded-xl transition-all duration-300">
            <Linkedin size={24} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
        <p className="text-gray-600 text-sm mt-10">
          📞 0700-147 671 &nbsp;·&nbsp; oscj87@gmail.com
        </p>
      </div>
    </section>
  )
}
