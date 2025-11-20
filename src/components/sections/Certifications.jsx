function Certifications() {
  return (
    <section id="certifications">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Certifications
      </p>
      <h2 className="text-2xl font-semibold mb-4">Certifications &amp; Courses</h2>

      <ul className="space-y-3 text-sm text-slate-300">
        <li className="flex justify-between gap-4">
          <span>Certification Name – Platform / Issuer</span>
          <span className="text-xs text-slate-500">Year</span>
        </li>
        <li className="flex justify-between gap-4">
          <span>Certification Name – Platform / Issuer</span>
          <span className="text-xs text-slate-500">Year</span>
        </li>
        <li className="flex justify-between gap-4">
          <span>Online Course / Specialization Name – Platform</span>
          <span className="text-xs text-slate-500">Year</span>
        </li>
      </ul>
    </section>
  );
}

export default Certifications;

