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
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">JavaScript</span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">Python</span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">TypeScript</span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">C++</span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium">Java</span>

          {/* ------------------ DATABASES ------------------ */}
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">MySQL</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">Postgres</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">SQL</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">MongoDB</span>

          {/* ------------------ FRAMEWORKS ------------------ */}
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">Node.js</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">React.js</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">Tailwind CSS</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">RESTful APIs</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">Vite</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">JSON</span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">Express</span>

          {/* ------------------ DEVOPS ------------------ */}
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">Docker</span>
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">CI/CD Pipelines</span>

          {/* ------------------ Cloud ------------------ */}
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
            AWS (EC2, S3, Lambda)
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
            Google Cloud (GCP)
          </span>

          {/* ------------------ ADDITIONAL ------------------ */}
          <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-medium">Git & GitHub</span>
          <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-medium">
            Deployments (Vercel / Netlify)
          </span>
          <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-medium">
            Tableau / Power BI
          </span>
          <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-medium">
            Data Analysis (Pandas, Excel, SQL)
          </span>

        </div>
      </div>
    </section>
  );
}

export default Skills;
