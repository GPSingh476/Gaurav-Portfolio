function Certifications() {
  return (
    <section id="certifications">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Certifications
      </p>
      <h2 className="text-2xl font-semibold mb-4">Certifications &amp; Courses</h2>

      <ul className="space-y-3 text-sm text-slate-300">

        {/* Power BI Certificate */}
        <li className="flex justify-between items-center gap-4">
          <a
            href="/assets/documents/PowerBiCertificate.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-indigo-300 hover:text-indigo-400 transition"
          >
            Microsoft Power BI Certification
          </a>

          <span className="text-xs text-slate-500 whitespace-nowrap">
            Completed · Mar 2023
          </span>
        </li>

      </ul>
    </section>
  );
}

export default Certifications;
