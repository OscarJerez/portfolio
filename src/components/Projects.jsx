'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'AsyncGuard',
      description: 'SaaS tool for monitoring Celery task failures. Detects failure chains, visualises task dependencies and provides one-click recovery. SDK hooks into existing Celery apps with minimal setup.',
      tech: ['Python', 'FastAPI', 'React', 'D3.js', 'Redis', 'Docker', 'PostgreSQL'],
      status: 'In progress', statusColor: 'yellow',
      github: 'https://github.com/OscarJerez/AsyncGuard',
    },
    {
      title: 'ClubSite – Bohus Taekwon-Do',
      description: 'Fullstack freelance project for a real taekwondo club. Separate frontend and backend repos with JWT auth, admin panel, news management and member views. Deployed via Vercel.',
      tech: ['.NET 8', 'Clean Architecture', 'React', 'TypeScript', 'Supabase', 'Vercel'],
      status: 'In progress', statusColor: 'yellow',
      github: 'https://github.com/OscarJerez',
    },
    {
      title: 'Clarity – Habit Tracker',
      description: 'Native Android habit tracker built in Kotlin. Focused on simplicity and daily usability. My first mobile project — expanding beyond the .NET/web stack.',
      tech: ['Kotlin', 'Android'],
      status: 'In progress', statusColor: 'yellow',
      github: 'https://github.com/OscarJerez',
    },
    {
      title: 'PersonalAgent',
      description: 'Personal AI assistant as a Telegram bot. Built with Node.js, Telegraf and the Anthropic SDK. Allowlist-based auth and conversation memory for daily task automation via natural language.',
      tech: ['Node.js', 'Telegraf', 'Anthropic SDK', 'TypeScript'],
      status: 'Live', statusColor: 'green',
      github: 'https://github.com/OscarJerez/PersonalAgent',
    },
    {
      title: 'HabitTracker2',
      description: 'Fullstack habit tracking app with Clean Architecture: separate API, Application, Domain and Infrastructure layers. CQRS with MediatR, AutoMapper, FluentValidation and JWT auth.',
      tech: ['C#', '.NET 8', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'CQRS'],
      status: 'Live', statusColor: 'green',
      github: 'https://github.com/OscarJerez/HabitTracker',
    },
    {
      title: 'Gym Booking System',
      description: 'REST API built with Clean Architecture from console app to full solution. Role-based JWT auth (member, admin, owner), EF Core with soft delete, repository pattern and Bogus for test data seeding.',
      tech: ['C#', '.NET 8', 'ASP.NET Core', 'EF Core', 'JWT', 'Clean Architecture'],
      status: 'Complete', statusColor: 'blue',
      github: 'https://github.com/OscarJerez/GymBookingSystem',
    },
    {
      title: 'Glossary Trainer',
      description: 'Live vocabulary training site at glossarytraining.se. Flashcards and quiz built with vanilla HTML/CSS/JS. Privacy-first — all logic runs in the browser, no backend, no accounts.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'Live', statusColor: 'green',
      link: 'https://glossarytraining.se',
      github: 'https://github.com/OscarJerez/oscarjerez.github.io',
    },
    {
      title: 'CMS-Platform',
      description: 'Headless CMS built with Next.js and Supabase. Handles dynamic slug and language routes in the same structure — hands-on experience with Next.js App Router and server components.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      status: 'In progress', statusColor: 'yellow',
      github: 'https://github.com/OscarJerez/CMS-Platform',
    },
  ]

  const statusStyles = {
    green: 'bg-green-900 text-green-300 border border-green-700',
    yellow: 'bg-yellow-900 text-yellow-300 border border-yellow-700',
    blue: 'bg-blue-900 text-blue-300 border border-blue-700',
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 border border-gray-800 p-7 rounded-xl hover:border-blue-500 transition-colors flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${statusStyles[project.statusColor]}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-700">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors">
                  <Github size={16} /> GitHub
                </a>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                    <ExternalLink size={16} /> Live site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
