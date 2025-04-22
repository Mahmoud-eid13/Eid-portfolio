import { RevealOnScroll } from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-700/30 hover:shadow-[0_2px_8px_rgba(59, 246, 115, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Fit-Finder</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed responsive user interfaces using React
                and Styled Components, ensuring seamless functionality across
                all devices and browsers. updated and maintained the project’s
                admin dashboard, implementing features for data visualization,
                user management, and content control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "StyledComponents", "next", "firebase"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-green-700/10 text-green-700 py-1 px-3 rounded-full text-sm hover:bg-green-700/20 
                                  hover:shadow-[0_2px_8px_rgba(59, 246, 59, 0.1)] transition-all
                  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://fitfindereg.com/"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-green-700/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          "
            >
              <h3 className="text-xl font-bold mb-2">iCard</h3>
              <p className="text-gray-400 mb-4">
                Created reusable and modular React components, adhering to best
                practices to promote scalability and maintainability.
                Collaborated with clients to gather project requirements,
                translate them into design prototypes, and deliver functional
                front-end solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "StyledComponents", "redux"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                    bg-green-700/10 text-green-700 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-green-700/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.icard.com.sa/"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-green-700/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          "
            >
              <h3 className="text-xl font-bold mb-2">Trendy-Rose</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed responsive user interfaces using React
                and Tailwind CSS, ensuring seamless functionality across all
                devices and browsers, Used Git for version control and
                collaborated with other team members via platforms like GitHub
                to streamline the development process.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Tailwindcss", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                    bg-green-700/10 text-green-700 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-green-700/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.trendyrosesa.com/?srsltid=AfmBOopYSQoZ3csSiu3-ysOMY-ClgiLarKA-meUTHUzDVsluJvDo0Fp1"
                  className="text-green-600 hover:text-green-500 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
            glass p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-green-500/30
            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            transition-all
          "
            >
              <h3 className="text-xl font-bold mb-2">iCard-blog</h3>
              <p className="text-gray-400 mb-4">
                Collaborate with UI/UX designers to translate wireframes,
                mockups, and prototypes into functional interfaces, Develop
                responsive, cross-browser-compatible, and accessible user
                interfaces using React and related technologies (styled
                components, and next js).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Nextjs", "React", "StyledComponents"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                    bg-green-500/10 text-green-500 py-1 px-3 
                    rounded-full text-sm
                    transition
                    hover:bg-green-500/20 hover:-translate-y-0.5
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://blog.icard.com.sa/"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
