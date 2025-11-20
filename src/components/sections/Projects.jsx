function Projects() {
  return (
    <section id="projects">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Projects
      </p>
      <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
      <p className="text-slate-400 text-sm mb-6">
        I am currently organizing and polishing my projects. They will be added
        here soon. For now, this section is a placeholder.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {["Project Title #1", "Project Title #2", "Project Title #3"].map(
          (title, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-200 mb-2">{title}</h3>
                <p className="text-xs text-slate-400 mb-3">
                  Short description of the project. Tech stack, problem solved,
                  and impact.
                </p>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 italic">
                Placeholder – you can replace this card with a real project
                later.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
