function Education() {
  return (
    <section id="education">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Education
      </p>
      <h2 className="text-2xl font-semibold mb-6">Academic Background</h2>

      <div className="space-y-4">
        {/* OSU MEng */}
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

        {/* Previous degree – fill in details later */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-100">
            Bachelor&apos;s Degree – [Your University Name]
          </h3>
          <p className="text-xs text-slate-400 mb-1">
            Year – Year · City, Country
          </p>
          <p className="text-sm text-slate-300">
            You can update this section with your bachelor&apos;s degree, major,
            university name, and any key achievements or relevant coursework.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
