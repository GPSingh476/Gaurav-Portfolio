function Experience() {
  return (
    <section id="experience">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Work Experience
      </p>
      <h2 className="text-2xl font-semibold mb-6">Where I've Worked</h2>

      <div className="space-y-6">
        {/* OSU Student Technician */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Student Technician – Oregon State University
            </h3>
            <p className="text-xs text-slate-400">
              May 2024 – Present · Corvallis, OR (USA)
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Providing technical support, troubleshooting, and documentation for
            students, staff, and faculty in a fast-paced academic environment.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Helped diagnose and resolve hardware, software, and connectivity
              issues, improving user experience and reducing downtime.
            </li>
            <li>
              Documented common issues and solutions to create repeatable
              troubleshooting steps and reduce repeated work.
            </li>
            <li>
              Collaborated with senior staff to escalate complex technical
              problems and ensure timely resolution.
            </li>
          </ul>
        </article>

        {/* TechLuminix – Software Developer Intern */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Software Developer Intern – TechLuminix Private Limited
            </h3>
            <p className="text-xs text-slate-400">
              Jun 2024 – Sep 2024 · Mumbai, India (Remote)
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Completed a hands-on Software Developer internship focused on
            strengthening core engineering skills, understanding real-world
            application architecture, and contributing to internal development
            workflows under team mentorship.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Gained hands-on experience with core software development
              concepts, including coding fundamentals, logic building, and
              application structure.
            </li>
            <li>
              Contributed to internal development tasks and assisted in
              completing assigned modules under team mentorship.
            </li>
            <li>
              Collaborated with developers to understand backend workflows,
              application architecture, and real-world development practices.
            </li>
            <li>
              Demonstrated strong dedication, consistent learning habits, and
              the ability to adapt quickly to new tools and project
              requirements.
            </li>
            <li>
              Improved team productivity by supporting documentation, testing
              small features, and contributing to collaborative problem-solving
              sessions.
            </li>
          </ul>
        </article>

        {/* Mepro Tech – Software Engineer */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Software Engineer – Mepro Tech
            </h3>
            <p className="text-xs text-slate-400">
              Jun 2022 – Aug 2023 · Mumbai, India
            </p>
          </div>

          <p className="text-sm text-slate-300 mb-2">
            Developed and optimized full-stack features across frontend,
            backend, and database layers while improving system performance,
            reliability, and development workflows in an Agile environment.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Developed full-stack features using JavaScript, React, Node.js,
              Python, and MongoDB/SQL, boosting system stability and enhancing
              UI responsiveness.
            </li>
            <li>
              Engineered and fine-tuned REST API endpoints and data pipelines,
              raising backend throughput and cutting query latency by 20%.
            </li>
            <li>
              Automated backend tasks, validation flows, and deployment
              routines, reducing manual effort and production issues by 25%.
            </li>
            <li>
              Refactored service layers and applied modular architecture
              patterns, lowering bug recurrence and accelerating feature
              delivery by 15–18%.
            </li>
            <li>
              Contributed to Agile/Scrum ceremonies—including sprint planning,
              stand-ups, and retrospectives—to support predictable and
              high-quality releases.
            </li>
            <li>
              Partnered with cross-functional teams to clarify technical
              requirements and document system architecture, improving engineer
              onboarding and alignment.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
