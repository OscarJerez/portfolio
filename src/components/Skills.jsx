'use client'

export default function Skills() {
  const categories = [
    {
      label: 'Backend', color: 'blue',
      skills: [
        { name: 'C# / .NET 8', level: 88 },
        { name: 'ASP.NET Core', level: 85 },
        { name: 'Python / FastAPI', level: 78 },
        { name: 'Entity Framework Core', level: 82 },
        { name: 'Clean Architecture / CQRS', level: 84 },
      ],
    },
    {
      label: 'Frontend', color: 'cyan',
      skills: [
        { name: 'React / TypeScript', level: 80 },
        { name: 'Next.js', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 82 },
      ],
    },
    {
      label: 'Databases & Infra', color: 'purple',
      skills: [
        { name: 'PostgreSQL / Supabase', level: 78 },
        { name: 'SQL Server / T-SQL', level: 80 },
        { name: 'Redis', level: 65 },
        { name: 'Docker', level: 68 },
        { name: 'Git / GitHub Actions', level: 85 },
      ],
    },
    {
      label: 'Other', color: 'green',
      skills: [
        { name: 'Kotlin (Android)', level: 55 },
        { name: 'JWT Auth', level: 82 },
        { name: 'REST API Design', level: 85 },
        { name: 'xUnit / TDD', level: 72 },
      ],
    },
  ]

  const barColor = { blue: 'bg-blue-500', cyan: 'bg-cyan-500', purple: 'bg-purple-500', green: 'bg-green-500' }
  const labelColor = { blue: 'text-blue-400', cyan: 'text-cyan-400', purple: 'text-purple-400', green: 'text-green-400' }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className={`text-lg font-bold mb-5 ${labelColor[cat.color]}`}>{cat.label}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div className={`${barColor[cat.color]} h-1.5 rounded-full transition-all duration-500`} style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
