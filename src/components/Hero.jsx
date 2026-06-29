'use client'

import { ArrowRight, Code2, ExternalLink } from 'lucide-react'

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
              <span className="text-sm text-blue-300">Open to work · Sweden / Remote / Hybrid</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Oscar <span className="gradient-text">Jerez</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-400 font-semibold">
                Fullstack Developer
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              .NET · React · Python. I build clean, testable backend systems and ship
              full-stack products — from REST APIs to Android apps. Recently graduated
              from NBI Handelsakademin and ready for my first junior role.
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
                <p className="text-3xl font-bold text-blue-400">2</p>
                <p className="text-gray-400 text-sm">LIA Internships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">8+</p>
                <p className="text-gray-400 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">3</p>
                <p className="text-gray-400 text-sm">Languages</p>
              </div>
            </div>
          </div>

          {/* Right Side — code snippet */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="ml-2 text-gray-500 text-xs">oscar.cs</span>
                </div>
                <div className="p-6 space-y-1 text-sm leading-relaxed">
                  <p><span className="text-blue-400">public class</span> <span className="text-cyan-300">OscarJerez</span></p>
                  <p className="pl-4"><span className="text-gray-500">// Systemutvecklare, NBI 2026</span></p>
                  <p className="pl-4"><span className="text-blue-400">string[]</span> stack = <span className="text-orange-300">&#123;</span></p>
                  <p className="pl-8 text-green-400">"C# / .NET 8"<span className="text-gray-400">,</span></p>
                  <p className="pl-8 text-green-400">"React / TypeScript"<span className="text-gray-400">,</span></p>
                  <p className="pl-8 text-green-400">"Python / FastAPI"<span className="text-gray-400">,</span></p>
                  <p className="pl-8 text-green-400">"Next.js / Tailwind"</p>
                  <p className="pl-4"><span className="text-orange-300">&#125;</span><span className="text-gray-400">;</span></p>
                  <p className="pl-4 pt-2"><span className="text-blue-400">bool</span> openToWork = <span className="text-orange-300">true</span><span className="text-gray-400">;</span></p>
                  <p className="pl-4"><span className="text-blue-400">string</span> location = <span className="text-green-400">"Sweden 🇸🇪"</span><span className="text-gray-400">;</span></p>
                  <p className="text-gray-600 pt-2">&#125;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
