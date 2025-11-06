import { motion } from "framer-motion";

const projects = [
  {
    title: "Design System Starter",
    description: "A scalable design system with Tailwind, Radix primitives, and React Aria patterns.",
    tags: ["React", "Tailwind", "Radix"],
    link: "#",
  },
  {
    title: "Next.js Commerce UI",
    description: "High-performance storefront UI with ISR, variant selectors, and cart interactions.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
  },
  {
    title: "Motion Templates",
    description: "Framer Motion templates for delightful micro-interactions and transitions.",
    tags: ["Framer Motion", "UX"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black to-black/90" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="text-white/70 mt-2">A selection of work and experiments.</p>
          </div>
          <a href="#contact" className="text-white font-semibold hover:underline">Get in touch</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-white/10 via-white/5 to-transparent" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
