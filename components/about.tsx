'use client'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
          <p>
            Hi! I am <span className="font-semibold text-slate-900 dark:text-slate-50">Jenesa C. Orquesta</span>, currently pursuing a <span className="font-semibold">Bachelor of Science in Information Technology (BSIT)</span> specializing in Web Development at <span className="font-semibold">St. Paul University Philippines</span>.
          </p>
          <p>
            I am passionate about creating websites and applications that are not only functional but also user-friendly and visually appealing. My focus areas include:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Full Stack Web Development</li>
            <li>Agentic AI and Intelligent Automation</li>
            <li>User Interface Design and Experience</li>
            <li>Modern Web Technologies and Frameworks</li>
          </ul>
          <p>
            I am always eager to learn new technologies and improve my skills in web development. Currently, I'm deepening my expertise in modern frameworks, cloud deployment, and AI-powered development approaches to create intelligent, responsive applications.
          </p>
        </div>
      </div>
    </section>
  )
}
