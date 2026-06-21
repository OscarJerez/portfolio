'use client'

export default function Skills() {
  const skills = [
    { name: 'C#', proficiency: 90 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'React.js', proficiency: 88 },
    { name: 'SQL', proficiency: 80 },
    { name: 'Git', proficiency: 85 },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">{skill.proficiency}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
