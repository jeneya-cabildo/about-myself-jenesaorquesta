'use client'

import { Code2, Palette, Zap, Database, Cloud, Brain } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: Palette,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express.js', 'API Design', 'Database Design', 'REST APIs']
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    items: ['Git & GitHub', 'Vercel', 'Azure', 'Docker', 'Version Control', 'CI/CD']
  },
  {
    category: 'AI & Automation',
    icon: Brain,
    items: ['Agentic AI', 'Prompt Engineering', 'AI Generation Tools', 'v0.dev', 'GitHub Copilot']
  },
  {
    category: 'Development Tools',
    icon: Code2,
    items: ['VS Code', 'Git', 'npm/yarn', 'Debugging', 'Testing', 'Performance Optimization']
  },
  {
    category: 'Programming Languages',
    icon: Zap,
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-12">
          Skills & Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <div key={index} className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                    {skillGroup.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-slate-700 dark:text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
