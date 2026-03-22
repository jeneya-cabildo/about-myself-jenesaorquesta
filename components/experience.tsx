'use client'

import { Award, BookOpen, Code } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    icon: BookOpen,
    title: 'Bachelor of Science in Information Technology',
    organization: 'St. Paul University Philippines',
    description: 'Specializing in Web Development, currently in 3B year. Engaged in comprehensive study of modern web technologies, software engineering principles, and emerging technologies including Agentic AI.',
    date: '2026 - Present',
    highlights: ['Web Development Specialization', 'Full Stack Development Focus', 'AI & Modern Frameworks']
  },
  {
    type: 'project',
    icon: Code,
    title: 'Full Stack Web Applications',
    organization: 'Academic & Personal Projects',
    description: 'Developed multiple full-stack web applications using Next.js, React, and Node.js. Created responsive user interfaces with Tailwind CSS and Shadcn components. Implemented modern deployment practices with Vercel.',
    date: 'Ongoing',
    highlights: ['Next.js 15 Development', 'API Integration', 'Database Design', 'Responsive Design']
  },
  {
    type: 'skill',
    icon: Award,
    title: 'Agentic AI Developer Track',
    organization: 'Bootcamp & Self-Learning',
    description: 'Focused learning path in Agentic AI development, including v0.dev for AI-powered interface generation, prompt engineering, and autonomous agent development. Building AI-first applications.',
    date: 'Ongoing',
    highlights: ['v0.dev Mastery', 'Prompt Engineering', 'AI-Generated Interfaces', 'Agent Architecture']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-12">
          Experience & Learning
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:border-l-0 last:pb-0">
                <div className="absolute left-[-10px] top-0 h-5 w-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-slate-950" />
                
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-medium mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
