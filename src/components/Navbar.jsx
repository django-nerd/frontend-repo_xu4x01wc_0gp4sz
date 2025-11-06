import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow ring-1 ring-black/5 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <p className="text-sm text-slate-600">Frontend Developer</p>
            <p className="text-base font-semibold text-slate-900">Anung Aninditha</p>
          </div>
        </motion.a>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <a
            href="mailto:hello@anung.dev"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>
      </nav>
    </header>
  );
}
