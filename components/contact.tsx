'use client'

import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:jeyacabildo@gmail.com',
    text: 'jeyacabildo@gmail.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/jeneya-cabildo',
    text: 'github.com/jeneya-cabildo'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeya-cabildo',
    text: 'linkedin.com/in/jeya-cabildo'
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-t border-blue-200 dark:border-blue-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm always interested in discussing web development, AI projects, and exciting opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-50 text-center mb-2">
                  {link.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center truncate">
                  {link.text}
                </p>
              </a>
            )
          })}
        </div>

        <div className="rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Want to work together?
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Send me an email or connect with me on social media. I'm excited to collaborate on innovative projects!
          </p>
          <Button
            onClick={() => window.location.href = 'mailto:jeyacabildo@gmail.com'}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Send Email
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-200 dark:border-blue-700">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            This CV website was created using v0.dev and Next.js 15, demonstrating modern web development practices and AI-powered interface generation.
          </p>
        </div>
      </div>
    </section>
  )
}
