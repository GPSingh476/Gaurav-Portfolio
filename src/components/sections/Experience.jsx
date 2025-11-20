function Experience() {
  return (
    <section id="experience">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Work Experience
      </p>
      <h2 className="text-2xl font-semibold mb-6">Where I've Worked</h2>

      <div className="space-y-6">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Job Title – Company Name
            </h3>
            <p className="text-xs text-slate-400">
              Month Year – Present · Location
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            One-line summary of your role and responsibilities.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Designed and built [feature] using [tech / stack], improving
              [metric].
            </li>
            <li>
              Collaborated with [team / stakeholders] to deliver [result].
            </li>
            <li>
              Implemented [tool / workflow] to make [process] more efficient.
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Job Title – Company Name
            </h3>
            <p className="text-xs text-slate-400">
              Month Year – Month Year · Location
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Another experience or internship – adjust or remove as needed.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>Collaborated on [project] using [tech stack].</li>
            <li>Analyzed [data / problem] to provide [insights].</li>
            <li>Documented and presented work to [team / stakeholders].</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
