import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight"
          onClick={close}
        >
          <span className="text-indigo-400">&lt;/&gt;</span> Gaurav Pramod Singh
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assets/Gaurav_Pramod_Singh_Resume.pdf"
            target="_blank"
            className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white transition"
          >
            Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggle}
            className="p-2 border border-slate-700 rounded-lg text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-400"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/assets/Gaurav_Pramod_Singh_Resume.pdf"
              target="_blank"
              className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-600 hover:text-white transition w-max"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
