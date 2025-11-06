import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Spline scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Glassy gradient veil to ensure text contrast without blocking interaction */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Available for freelance projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Futuristic interfaces with precision and motion.
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            I'm Anung Aninditha, a frontend developer specializing in Next.js, TypeScript, and Tailwind CSS. I craft fast, accessible interfaces with a focus on delightful motion.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-semibold shadow-sm hover:bg-white/90 transition"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-semibold shadow-sm ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              See Projects
            </a>
          </div>
        </motion.div>

        {/* Profile card with glass theme */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-6 sm:p-8 shadow-2xl max-w-md ml-auto"
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10 flex-shrink-0">
              {/* Replace the src below with your own image URL later */}
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
                alt="Profile of Anung Aninditha"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-white/70 text-sm">Frontend Developer</p>
              <h3 className="text-white font-semibold text-xl">Anung Aninditha</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((s) => (
                  <span key={s} className="text-[11px] px-2 py-1 rounded-md bg-white/10 text-white/80 ring-1 ring-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
