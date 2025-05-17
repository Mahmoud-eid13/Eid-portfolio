import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "nextjs",
    "TypeScript",
    "TailwindCSS",
    "StyledComponents",
    "javaScript",
    "RestfulApis",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-700/10 text-green-700 py-1 px-3 rounded-full text-sm hover:bg-green-700/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor of Commerce </strong> - cairo University
                  (2019-2024)
                </li>
                <li>
                  Web Development Certifications
                  <br />
                  Udemy: React & JavaScript Mastery
                  <br />
                  FreeCodeCamp: Responsive Web Design & JavaScript Algorithms
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Jumpware Software House — Frontend Developer
                    <br />
                    Remote | Jun 2024 – Present
                  </h4>
                  <p>
                    Built the Fit Finder website and admin dashboard using React
                    and Next.js from the ground up.
                    <br />
                    Developed responsive, high-performance components aligned
                    with user experience goals.
                    <br />
                    Collaborated with UI/UX designers and backend engineers to
                    deliver seamless product functionality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Etisalat UAE — SME Specialist
                    <br />
                    Onsite | Apr 2021 – May 2023
                  </h4>
                  <p>
                    Monitored floor operations and managed agent distribution
                    across queues and service lines.
                    <br />
                    Reported daily performance metrics and KPIs to management
                    with accuracy and timeliness.
                    <br />
                    Played a key role in maintaining service levels and
                    supporting data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
