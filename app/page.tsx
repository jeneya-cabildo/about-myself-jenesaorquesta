import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export const metadata = {
  title: "Jenesa C. Orquesta | Full Stack & Agentic AI Developer",
  description: "Professional CV website of Jenesa C. Orquesta - Full Stack and Agentic AI Developer showcasing skills, experience, and projects.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Jenesa C. Orquesta. All rights reserved.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Built with Next.js 15, Tailwind CSS, and Shadcn UI
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
