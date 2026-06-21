'use client'

import { ArrowRight, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-full px-4 py-2 w-fit">
              <Code2 size={16} className="text-blue-400" />
              <span className="text-sm text-blue-300">Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Oscar <span className="gradient-text">Jerez</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-400 font-semibold">
                Full Stack Developer
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Building scalable, innovative solutions for modern startups. Passionate about creating applications that make an impact. Let's turn your ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-400">5+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">20+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-gray-400 text-sm">Client Satisfied</p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration Area */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Floating cards */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 bg-blue-500 rounded w-3/4"></div>
                  <div className="h-3 bg-blue-400 rounded w-full"></div>
                  <div className="h-3 bg-blue-500 rounded w-5/6"></div>
                  <div className="pt-4 space-y-3">
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-700 rounded w-4/6"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-lg opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
