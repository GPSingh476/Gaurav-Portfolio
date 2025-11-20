function About() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-indigo-400">Gaurav Pramod Singh</span>{" "}
            —{" "}
            <span className="text-slate-300">
              Aspiring Software Developer &amp; Data Analyst
            </span>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-4">
            I am currently pursuing a Master of Engineering in Computer Science
            at Oregon State University. I enjoy building clean, user-friendly
            applications and using data to solve real-world problems. My
            interests sit at the intersection of software development and data
            analytics, and I like working end-to-end – from front-end UI to
            back-end logic and databases.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            I have hands-on experience as a Student Technician at Oregon State
            University, and previous industry experience as a Business Data
            Analyst at Mepro Tech and a Data Analyst Intern at Dotech
            Technologies. Across these roles, I&apos;ve worked with SQL,
            spreadsheets, dashboards, and process improvements to support better
            decision-making.
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            Right now, I&apos;m focused on strengthening my skills in{" "}
            <span className="text-slate-200 font-medium">
              JavaScript, React, Node.js, Python, and SQL
            </span>{" "}
            while building projects that demonstrate solid engineering
            fundamentals, data analysis, and clear communication of results.
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
      </div>
    </section>
  );
}

export default About;
