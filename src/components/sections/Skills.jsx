function Skills() {
  return (
    <section id="skills">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Skills
      </p>

      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="flex flex-wrap gap-3 text-sm">
          {/* ------------------ LANGUAGES ------------------ */}
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            JavaScript
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            Python
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            TypeScript
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            C++
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">
            Java
          </span>

          {/* ------------------ DATABASES ------------------ */}
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
            MySQL
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
            Postgres
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
            SQL
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
            MongoDB
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
            MariaDB
          </span>

          {/* ------------------ FRAMEWORKS & TOOLS ------------------ */}
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            React.js
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Next.js
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Node.js
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Flask
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Vite
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Git
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">
            Jira
          </span>

          {/* ------------------ CLOUD & DEVOPS ------------------ */}
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
            AWS (Lambda, DynamoDB, IoT)
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
            Docker
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
            CI/CD Pipelines
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
