function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {year} Gaurav Pramod Singh. All rights reserved.</p>
        <p>
          Built with <span className="text-indigo-400">React</span> &{" "}
          <span className="text-indigo-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
