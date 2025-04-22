import { RevealOnScroll } from "../RevealOnScroll";

import me from "../../assets/me.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={me}
              alt="Mahmoud Eid"
              className="w-100 h-100 object-cover rounded-full shadow-lg"
            />
          </div>
          {/* Left Side - Text */}
          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Mahmoud Eid
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              I build fast, responsive web apps using React.js and Next.js,
              focusing on performance and user experience. With a strong grasp
              of TypeScript, Tailwind CSS, and Framer Motion for animations, I
              create clean, scalable applications. I’ve worked on projects like
              eCommerce sites and event booking platforms, always aiming for
              pixel-perfect design and seamless functionality.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-green-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 246, 90, 0.2)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-green-700/50 text-green-700 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 246, 90, 0.2)] hover:bg-green-700/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
