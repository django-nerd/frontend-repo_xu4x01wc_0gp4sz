import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50/50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            Available for freelance projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Building modern, performant web experiences.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl">
            I'm Anung Aninditha, a frontend developer specializing in Next.js, TypeScript, and Tailwind CSS. I craft fast, accessible interfaces with a focus on delightful motion.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-slate-800 transition"
            >
              View Experience
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
            >
              See Projects
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
          }}
          className="relative grid grid-cols-2 gap-4"
        >
          {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Node.js"].map((skill) => (
            <motion.li
              key={skill}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
