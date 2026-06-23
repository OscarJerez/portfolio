'use client'

import { Zap, Target, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a newly graduated fullstack developer from NBI Handelsakademin in Göteborg,
              with a background in C#/.NET 8, React/TypeScript and Python. I completed two
              internships in real production environments — one at TMY Life / NutriWize building
              a FastAPI backend for nutritional data, and one at InfinetCode AB shipping
              features end-to-end on a fullstack e-learning platform.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Before switching to software, I spent 18 years as a professional driver — which
              taught me punctuality, responsibility and how to stay calm under pressure. I bring
              those same qualities to code: I take ownership of my modules, communicate clearly
              in a team, and ship clean, testable work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of work I lead a taekwondo club (Bohus Taekwon-Do) in Nödinge and I'm
              currently building AsyncGuard, a SaaS tool for monitoring Celery task failures,
              and Clarity, an Android habit tracker in Kotlin.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Clean Architecture</h3>
                  <p className="text-gray-400">
                    I default to Clean Architecture and CQRS — separating domain, application
                    and infrastructure so code stays testable and easy to change.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg">
                  <Target className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Full Stack, End-to-End</h3>
                  <p className="text-gray-400">
                    From .NET APIs and PostgreSQL schemas to React frontends and Vercel
                    deployments — I'm comfortable owning the whole feature.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg">
                  <Award className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Team Player</h3>
                  <p className="text-gray-400">
                    Worked in agile teams of 6+ developers using Git branching, pull requests
                    and code review as standard workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { category: 'Backend', techs: ['C# / .NET 8', 'ASP.NET Core', 'Python', 'FastAPI', 'Entity Framework Core', 'JWT Auth'] },
              { category: 'Frontend', techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js'] },
              { category: 'Databases', techs: ['PostgreSQL', 'SQL Server', 'SQLite', 'Supabase', 'Redis'] },
              { category: 'Tools & Platforms', techs: ['Git / GitHub', 'Docker', 'Vercel', 'GitHub Actions', 'Swagger', 'xUnit'] }
            ].map((stack, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-100 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
