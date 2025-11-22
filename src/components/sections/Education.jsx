function Education() {
  return (
    <section id="education">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Education
      </p>
      <h2 className="text-2xl font-semibold mb-6">Academic Background</h2>

      <div className="space-y-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-semibold text-slate-100">
            Master of Engineering in Computer Science – Oregon State University
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Expected Graduation: Fall 2025 · Corvallis, OR, USA
          </p>
          <p className="text-sm text-slate-300">
            Coursework includes algorithms, computer architecture, and
            human-computer interaction, along with projects in graphics,
            full-stack development, and data analysis. This program is helping
            me strengthen both my problem-solving and software engineering
            skills.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-100">
            Bachelor&apos;s Degree – Thakur College of Science and Commerce
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Jun 2019 - Apr 2022 · Mumbai, India
          </p>
          <p className="text-sm text-slate-300">
            My bachelor’s coursework included programming (C, Python, Java),
            data structures, algorithms, databases, operating systems, computer
            networks, and software engineering, along with Linux, web
            technologies, and applied mathematics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
