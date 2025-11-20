function Projects() {
  const projects = [
    {
      title: "Snake Menagerie (Graphics Project)",
      description:
        "OpenGL / GLSL project exploring procedural animation, lighting, and rendering of a snake scene as part of CS graphics coursework.",
      tech: ["C++", "OpenGL", "GLSL"],
    },
    {
      title: "Parks & Recreation SQL Analytics",
      description:
        "Data analysis project using SQL to explore employee demographics, salaries, and HR metrics based on a fictional Parks & Recreation dataset.",
      tech: ["MySQL", "SQL", "Joins", "Aggregations"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This portfolio itself, built as a single-page React application with Tailwind CSS, EmailJS contact integration, and Vite for fast development.",
      tech: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    },
  ];

  return (
    <section id="projects">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Projects
      </p>
      <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
      <p className="text-slate-400 text-sm mb-6">
        Here are a few projects that represent what I&apos;ve been working on
        recently. I am actively building more full-stack and data-focused
        projects, which I will continue to add here.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
