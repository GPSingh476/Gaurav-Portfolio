function About() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-indigo-400">Gaurav Pramod Singh</span>{" "}
            —{" "}
            <span className="text-slate-300">
              Aspiring Software Developer &amp; Data Analyst
            </span>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-4">
            I am a graduate student pursuing a Master of Engineering in Computer
            Science at Oregon State University, where I focus on software
            development, full-stack engineering, and data-driven problem solving.
            I enjoy building clean, responsive applications and working across the
            full stack — from front-end UI to back-end logic and databases.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            I have hands-on technical experience as a Student Technician at Oregon
            State University and industry experience as a Software Developer Intern
            at TechLuminix. Previously, I worked as a Business Data Analyst at
            Mepro Tech and a Data Analyst Intern at Dotech Technologies, where I
            gained practical experience with SQL, spreadsheets, dashboards, and
            process optimization to support better decision-making.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            My academic background includes a Bachelor of Science in Computer
            Science from Thakur College of Science and Commerce, where I built a
            strong foundation in programming, data structures, algorithms,
            databases, and software engineering.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            Currently, I&apos;m strengthening my skills in{" "}
            <span className="font-medium text-indigo-300">
              JavaScript, React, Node.js, Express, Python, and SQL
            </span>{" "}
            while building full-stack projects that demonstrate solid engineering
            fundamentals, clean design, and clear communication of results.
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
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-700 p-[3px]">
            <img
              src="/assets/me.jpeg"
              alt="Gaurav Pramod Singh"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
