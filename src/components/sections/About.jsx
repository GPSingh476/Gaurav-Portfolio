function About() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="text-indigo-400">Gaurav Pramod Singh</span> —{" "}
            <span className="text-slate-300">
              Aspiring Software Developer &amp; Data Analyst
            </span>
          </h1>
          <p className="text-slate-300 leading-relaxed mb-4">
            I am a graduate student at Oregon State University pursuing my
            Master of Engineering in Computer Science. I enjoy building clean,
            user-friendly applications and solving complex problems with code,
            data, and smart system design. I’m passionate about both software
            development and data analytics, and I love working across the full
            stack — from interactive front-end UI to back-end logic and
            databases.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            My goals right now are to strengthen my skills in{" "}
            <span className="text-slate-200 font-medium">
              JavaScript, React, Node.js, Python, and SQL
            </span>
            , while showcasing impactful academic and personal projects. I’m
            currently working on graphics programming, algorithms, and
            full-stack development, building a portfolio that reflects
            creativity, clean engineering, and results.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-700 p-[2px]">
            <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center">
              <span className="text-slate-500 text-xs text-center px-4">
                Your Photo / Logo Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
