export const metadata = {
  title: "Jenesa Orquesta - Web Developer",
  description: "Full Stack and Agentic AI Developer",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-2xl space-y-12 text-center">
        {/* Profile Section */}
        <div className="space-y-6">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="h-32 w-32 rounded-full border-4 border-zinc-200 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-5xl">👩‍💻</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <h1 className="text-4xl font-bold text-black">Jenesa Orquesta</h1>
          </div>

          {/* Title */}
          <div>
            <p className="text-lg text-gray-500">Full Stack and Agentic AI Developer</p>
          </div>

          {/* GitHub Button */}
          <div>
            <a
              href="https://github.com/jeneya-cabildo/ai-agent-dev-setup-requirements"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-black px-6 py-2 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200"></div>

        {/* About Section */}
        <div className="space-y-6 text-left">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            About
          </h2>

          <p className="text-base leading-relaxed text-gray-600">
            Hi! I am Jenesa C. Orquesta under of BSIT 3B - Web Developer from St. Paul University Philippines, currently learning about the Full Stack and Agentic AI Field. I am passionate about creating websites and applications that are not only functional but also user-friendly and visually appealing. I am always eager to learn new technologies and improve my skills in web development.
          </p>
        </div>

        {/* Footer */}
       
      </div>
    </div>
  );
}
