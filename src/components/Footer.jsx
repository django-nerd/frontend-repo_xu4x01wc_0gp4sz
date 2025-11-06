export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} Anung Aninditha. Crafted with React, Tailwind, and love.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="mailto:hello@anung.dev" className="text-slate-700 hover:text-slate-900">Email</a>
            <span className="text-slate-300">•</span>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">LinkedIn</a>
            <span className="text-slate-300">•</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
