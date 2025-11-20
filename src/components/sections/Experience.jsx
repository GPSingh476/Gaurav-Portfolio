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
              2024 – Present · Corvallis, OR (USA)
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

        {/* Mepro Tech – Business Data Analyst */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Business Data Analyst – Mepro Tech
            </h3>
            <p className="text-xs text-slate-400">
              Year – Year · Mumbai, India
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Worked with business and technical teams to analyze data, streamline
            operations, and support decision-making using dashboards and reports.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Used SQL and spreadsheets to clean, transform, and analyze
              operational and financial data.
            </li>
            <li>
              Helped create dashboards and reports that highlighted key
              performance metrics and trends for stakeholders.
            </li>
            <li>
              Collaborated with cross-functional teams to translate business
              questions into measurable metrics and data-driven insights.
            </li>
          </ul>
        </article>

        {/* Dotech Technologies – Data Analyst Intern */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-100">
              Data Analyst Intern – Dotech Technologies
            </h3>
            <p className="text-xs text-slate-400">
              Year – Year · Location
            </p>
          </div>
          <p className="text-sm text-slate-300 mb-2">
            Assisted in data collection, cleaning, and reporting to support
            internal analytics and client projects.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
            <li>
              Helped prepare datasets for analysis and reporting using tools
              like Excel and Python.
            </li>
            <li>
              Supported the creation of visualizations and summary reports to
              communicate findings to non-technical stakeholders.
            </li>
            <li>
              Learned to work with real-world, messy data and deliver clear,
              concise summaries.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
