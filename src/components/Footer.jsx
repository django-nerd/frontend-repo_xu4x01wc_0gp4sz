export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {year} Anung Aninditha. Crafted with React, Tailwind, and love.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="mailto:hello@anung.dev" className="text-white/90 hover:text-white">Email</a>
            <span className="text-white/30">•</span>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white">LinkedIn</a>
            <span className="text-white/30">•</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
