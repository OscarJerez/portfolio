'use client'

import { Zap, Award, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi! I'm Oscar Jerez, a passionate Full Stack Developer with 5+ years of experience building web applications and scalable solutions. I specialize in creating modern, user-centric applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with a passion for problem-solving and has evolved into a career focused on building products that matter. Whether it's a startup MVP or a complex enterprise system, I bring dedication, expertise, and creativity to every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers. I believe in continuous learning and staying at the forefront of web development trends.
            </p>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fast & Efficient</h3>
                  <p className="text-gray-400">Building optimized applications with a focus on performance and user experience.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg">
                  <Target className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Goal Oriented</h3>
                  <p className="text-gray-400">Committed to delivering solutions that align with your business objectives.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg">
                  <Award className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                  <p className="text-gray-400">Maintaining high standards in code quality, communication, and project delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Backend',
                techs: ['C#', 'Node.js', 'SQL', 'REST APIs']
              },
              {
                category: 'Frontend',
                techs: ['JavaScript', 'React.js', 'Tailwind CSS', 'Next.js']
              },
              {
                category: 'Tools & Platforms',
                techs: ['Git', 'Docker', 'AWS', 'Vercel']
              }
            ].map((stack, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-100 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
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
