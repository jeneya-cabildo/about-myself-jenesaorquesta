import Link from "next/link";

export const metadata = {
  title: "About - My Next.js App",
  description: "Learn more about my Next.js application",
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="mb-12">
          <Link
            href="/"
            className="text-lg font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            About Me
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to my Next.js application! This is a modern web project built
            with Next.js 15, React, TypeScript, and Tailwind CSS. I'm using the
            App Router for a seamless, performant user experience.
          </p>

          <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-zinc-50">
              What I'm Building
            </h2>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              This application showcases modern web development practices,
              including responsive design, dark mode support, and optimized
              performance. I'm constantly learning and improving my skills in
              full-stack development with Next.js and related technologies.
            </p>
          </div>

          <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-8">
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-zinc-50">
              Technology Stack
            </h2>
            <ul className="grid grid-cols-2 gap-4 text-base text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
              <li>• Next.js 15</li>
              <li>• React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• App Router</li>
              <li>• Dark Mode</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          >
            Back Home
          </Link>
        </div>
      </main>
    </div>
  );
}
