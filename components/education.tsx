'use client'

export function Education() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-12">
          Education
        </h2>
        
        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <div className="flex items-start justify-between mb-4 flex-col gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  Web Development Specialization
                </p>
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                2022 - Present
              </span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
              St. Paul University Philippines
            </p>
            
            <div className="space-y-3">
              <p className="text-slate-700 dark:text-slate-300">
                Currently enrolled in 3B year with focus on:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                  <span>Web Development Technologies and Frameworks</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                  <span>Full Stack Development Practices</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                  <span>Software Engineering and Design Patterns</span>
                </li>
                <li className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                  <span>Emerging Technologies including AI and Automation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Key Competencies Gained
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Technical</h4>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                  <li>• Next.js & React</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Tailwind CSS & UI Design</li>
                  <li>• Database Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">Professional</h4>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
                  <li>• Git & Version Control</li>
                  <li>• Agile Development</li>
                  <li>• Cloud Deployment</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
