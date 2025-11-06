import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Web Developer",
    company: "Lyrid · Full-time",
    period: "Sep 2022 - Present · 3 yrs 3 mos",
    location: "United States",
    bullets: [
      "Developing and maintaining modern web applications with a focus on high performance and optimal user experience.",
      "Utilizing Next.js to build scalable and efficient frontend architectures, leveraging its server-side rendering capabilities.",
      "Implementing responsive and visually appealing user interfaces using Tailwind CSS.",
      "Collaborating with backend engineers and UX/UI designers to integrate APIs and ensure design consistency.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Shipper",
    period: "Aug 2021 - Sep 2022 · 1 yr 2 mos",
    location: "Jakarta, Indonesia",
    bullets: [
      "Contributed to the development of a complex logistics platform to enhance user experience.",
      "Used Next.js as the primary framework for building server-rendered React applications.",
      "Developed type-safe and maintainable code using TypeScript.",
      "Accelerated UI development and ensured consistent styling across the application using Tailwind CSS.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "RCTI+",
    period: "Aug 2019 - Aug 2021 · 2 yrs 1 mo",
    location: "",
    bullets: [
      "Developed and enhanced features for the RCTI+ video streaming (OTT) platform.",
      "Built dynamic and interactive user interfaces using Vue.js.",
      "Worked on SEO optimization and improving initial load time.",
      "Ensured cross-browser and cross-device compatibility to reach a broad audience.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "OKTAGON",
    period: "Jan 2018 - Jul 2019 · 1 yr 7 mos",
    location: "Yogyakarta Area, Yogyakarta, Indonesia",
    bullets: [
      "Part of the development team building web applications and digital solutions for clients.",
      "Gained experience with multiple frontend frameworks, including Angular and React.js, for creating responsive Single Page Applications (SPAs).",
      "Designed and implemented layouts using utility-first CSS.",
    ],
  },
  {
    role: "Mentor",
    company: "Binar Academy",
    period: "Mar 2018 - Apr 2018 · 2 mos",
    location: "Yogyakarta, Indonesia",
    bullets: [
      "Mentored and shared knowledge with aspiring developers, focusing on web development fundamentals.",
      "Taught core programming concepts and the basics of JavaScript to provide a strong foundation for frontend development.",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Upwork",
    period: "May 2015 - May 2017 · 2 yrs 1 mo",
    location: "",
    bullets: [
      "Created visual assets for various client projects, specializing in logo design and banner creation.",
      "This background in visual design provided a solid foundation for UI/UX principles in frontend development.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Experience</h2>
          <p className="text-slate-600 mt-2">A timeline of my roles and contributions.</p>
        </div>

        <div className="relative space-y-6">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-700">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">{exp.period}</p>
                  {exp.location && (
                    <p className="text-sm text-slate-600">{exp.location}</p>
                  )}
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-slate-700 list-disc list-inside">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
