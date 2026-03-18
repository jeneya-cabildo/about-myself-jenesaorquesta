'use client'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-slate-900 dark:border-slate-50 shadow-lg">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=JenesaOrquesta"
                alt="Jenesa C. Orquesta"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            Jenesa C. Orquesta
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Full Stack & Agentic AI Developer
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Building innovative web solutions and exploring the frontier of agentic AI. Currently pursuing BSIT at St. Paul University Philippines, passionate about creating functional, user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  )
}
