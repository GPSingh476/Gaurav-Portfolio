function Certifications() {
  return (
    <section id="certifications">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Certifications
      </p>
      <h2 className="text-2xl font-semibold mb-4">Certifications &amp; Courses</h2>

      <ul className="space-y-3 text-sm text-slate-300">
        <li className="flex justify-between gap-4">
          <span>Google Data Analytics Professional Certificate – Coursera</span>
          <span className="text-xs text-slate-500">In Progress</span>
        </li>
        <li className="flex justify-between gap-4">
          <span>Microsoft Azure Data Engineer (DP-203) – Self-study</span>
          <span className="text-xs text-slate-500">Planned</span>
        </li>
        <li className="flex justify-between gap-4">
          <span>
            Additional courses in web development, algorithms, and databases
          </span>
          <span className="text-xs text-slate-500">Ongoing</span>
        </li>
      </ul>
    </section>
  );
}

export default Certifications;
