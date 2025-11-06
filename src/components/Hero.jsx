import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function AbstractRainBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    const dropsCount = Math.floor(Math.min(220, Math.max(80, width / 8)));
    const drops = Array.from({ length: dropsCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * -height,
      len: 10 + Math.random() * 24,
      speed: 1.2 + Math.random() * 2.5,
      width: 0.75 + Math.random() * 1.25,
      hue: 210 + Math.random() * 40, // cool blue range
      alpha: 0.15 + Math.random() * 0.2,
    }));

    let lastTime = performance.now();
    function animate(now) {
      const dt = Math.min(32, now - lastTime);
      lastTime = now;

      // subtle motion blur background
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, 0, width, height);

      for (let d of drops) {
        // draw
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.len);
        grad.addColorStop(0, `hsla(${d.hue}, 90%, 70%, ${d.alpha})`);
        grad.addColorStop(1, `hsla(${d.hue}, 90%, 55%, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = d.width;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();

        // update
        d.y += d.speed * (dt / 16);
        if (d.y > height + d.len) {
          d.x = Math.random() * width;
          d.y = -Math.random() * height * 0.3;
          d.len = 10 + Math.random() * 24;
          d.speed = 1.2 + Math.random() * 2.5;
          d.width = 0.75 + Math.random() * 1.25;
          d.hue = 210 + Math.random() * 40;
          d.alpha = 0.15 + Math.random() * 0.2;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    }

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Calmer abstract rain background (replaces dizzying 3D tunnel) */}
      <div className="absolute inset-0">
        <AbstractRainBackground />
      </div>

      {/* Soft vignettes and color wash (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(50%_50%_at_70%_70%,rgba(147,197,253,0.18),transparent_60%)]" />

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
            Calm, abstract rain for a focused portfolio.
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            I design clean, performant interfaces with subtle motion and a soothing backdrop. No dizziness—just clarity and craft.
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
