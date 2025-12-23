function About() {
  return (
    <section id="about" className="pt-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400 mb-3">
            About Me
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-indigo-400">Gaurav Pramod Singh</span>{" "}
            —{" "}
            <span className="text-slate-300">
              <span className="text-indigo-400">Software Engineer</span> &{" "}
              <span className="text-indigo-400">Full Stack Developer</span>
            </span>
          </h1>

          <p className="text-slate-300 leading-relaxed mb-4">
            I&apos;m a Computer Science graduate with hands-on experience building{" "}
            <span className="text-indigo-400 font-medium">
              scalable web apps, REST APIs, and cloud-based backend services
            </span>{" "}
            using{" "}
            <span className="text-indigo-400 font-medium">
              JavaScript, React, Node.js, Python, SQL, and MongoDB
            </span>
            .
          </p>

          <p className="text-slate-300 leading-relaxed mb-6">
            I&apos;ve shipped full-stack features at{" "}
            <span className="text-indigo-400 font-medium">Mepro Tech</span> and built
            serverless, event-driven backend workflows at{" "}
            <span className="text-indigo-400 font-medium">Canoo</span> using{" "}
            <span className="text-indigo-400 font-medium">
              AWS (Lambda, DynamoDB, IoT)
            </span>
            . I care about clean architecture, reliability, performance, and
            production-ready delivery.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-600 text-sm font-medium hover:border-indigo-500 hover:text-indigo-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-700 p-[3px]">
            <img
              src="/assets/me.jpeg"
              alt="Gaurav Pramod Singh"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

