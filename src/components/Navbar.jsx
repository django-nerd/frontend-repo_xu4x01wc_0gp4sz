import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/80 via-white/50 to-white/30 shadow ring-1 ring-white/20 flex items-center justify-center text-black font-bold">
            A
          </div>
          <div>
            <p className="text-xs text-white/70">Frontend Developer</p>
            <p className="text-base font-semibold text-white">Anung Aninditha</p>
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
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 active:bg-white/15 transition"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-white/90 hover:bg-white/10 active:bg-white/15 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-white/90 hover:bg-white/10 active:bg-white/15 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>
      </nav>
    </header>
  );
}
