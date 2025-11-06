import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MeteorShowerBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

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

    // 50 degrees slant
    const angleDeg = 50;
    const angle = (angleDeg * Math.PI) / 180;
    const sinA = Math.sin(angle);
    const cosA = Math.cos(angle);

    const count = Math.floor(Math.min(160, Math.max(70, (width + height) / 12)));
    const meteors = Array.from({ length: count }).map(() => ({
      x: Math.random() * width - width * 0.2,
      y: Math.random() * height - height,
      len: 60 + Math.random() * 140, // longer like falling meteors
      speed: 2.2 + Math.random() * 3.2,
      width: 1 + Math.random() * 1.6,
      hue: 200 + Math.random() * 30, // cool blue-ish
      alpha: 0.18 + Math.random() * 0.22,
      glow: 0.3 + Math.random() * 0.5,
    }));

    let last = performance.now();
    function tick(now) {
      const dt = Math.min(32, now - last);
      last = now;

      // Motion blur background clear
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, 0, width, height);

      for (let m of meteors) {
        const tailX = m.x - m.len * sinA;
        const tailY = m.y - m.len * cosA;

        // soft glow
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `hsla(${m.hue}, 90%, 85%, ${Math.min(1, m.alpha + 0.12)})`);
        grad.addColorStop(0.25, `hsla(${m.hue}, 90%, 70%, ${m.alpha})`);
        grad.addColorStop(1, `hsla(${m.hue}, 90%, 60%, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";

        // outer glow using shadow
        ctx.save();
        ctx.shadowColor = `hsla(${m.hue}, 100%, 75%, ${m.glow})`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.restore();

        // update position along 50deg
        m.x += m.speed * sinA * (dt / 16);
        m.y += m.speed * cosA * (dt / 16);

        // recycle when off-screen (consider diagonal overshoot)
        if (m.x > width + 100 || m.y > height + 100) {
          m.x = -100 + Math.random() * (width * 0.5);
          m.y = -Math.random() * height * 0.6 - 60;
          m.len = 60 + Math.random() * 140;
          m.speed = 2.2 + Math.random() * 3.2;
          m.width = 1 + Math.random() * 1.6;
          m.hue = 200 + Math.random() * 30;
          m.alpha = 0.18 + Math.random() * 0.22;
          m.glow = 0.3 + Math.random() * 0.5;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

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
      cancelAnimationFrame(rafRef.current);
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
      {/* Calmer abstract meteor rain at 50° */}
      <div className="absolute inset-0">
        <MeteorShowerBackground />
      </div>

      {/* Vignette and gentle cool tint (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-35 bg-[radial-gradient(60%_60%_at_30%_30%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(50%_50%_at_70%_70%,rgba(147,197,253,0.16),transparent_60%)]" />

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
            Meteor rain at 50° for a dynamic yet calm vibe.
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Subtle, elongated streaks glide diagonally—evoking falling meteors without overwhelming motion.
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
