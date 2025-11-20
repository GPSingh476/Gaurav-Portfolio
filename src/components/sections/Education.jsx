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
            Focus on algorithms, computer architecture, human-computer
            interaction, and software engineering, with additional work in data
            analysis and web development.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-100">
            Previous Degree – College / University Name
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Month Year – Month Year · City, Country
          </p>
          <p className="text-sm text-slate-300">
            Optional: mention GPA, awards, or relevant coursework once you fill
            this in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
