function Skills() {
  return (
    <section id="skills">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Skills
      </p>
      <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-sm font-semibold text-slate-100 mb-3 uppercase tracking-wide">
            Languages
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML &amp; CSS</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-sm font-semibold text-slate-100 mb-3 uppercase tracking-wide">
            Frameworks &amp; Tools
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Node.js / Express (learning)</li>
            <li>MongoDB / MySQL</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-sm font-semibold text-slate-100 mb-3 uppercase tracking-wide">
            Other
          </h3>
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Git &amp; GitHub</li>
            <li>REST APIs</li>
            <li>Data Analysis (Pandas, Excel, SQL)</li>
            <li>Basic cloud &amp; deployments (Vercel / Netlify)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
