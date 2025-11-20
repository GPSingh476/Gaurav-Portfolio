function Contact() {
  return (
    <section id="contact">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
        Contact
      </p>
      <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>

      <p className="text-slate-300 text-sm mb-4">
        I'm open to software development roles, data roles, internships, and
        interesting project collaborations. Email is the best way to reach me —
        and you can also find me on LinkedIn and GitHub.
      </p>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <a
          href="mailto:gauravpsingh720@gmail.com"
          className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition w-max"
        >
          Email Me
        </a>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-slate-300 hover:text-indigo-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 text-slate-300 hover:text-indigo-300"
          >
            GitHub
          </a>
        </div>
      </div>

      <form className="grid md:grid-cols-2 gap-4 max-w-xl">
        <div className="md:col-span-1">
          <label className="block text-xs text-slate-400 mb-1">Name</label>
          <input
            type="text"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-xs text-slate-400 mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs text-slate-400 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
          >
            Send Message (UI only)
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
