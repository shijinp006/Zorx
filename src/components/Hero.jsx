import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BlurReveal, FadeUp, Counter } from './Reveal'
import { IconStar } from './icons'

const TICKER = ['DIGITAL MARKETING', 'SEO', 'BRANDING', 'SOCIAL MEDIA', 'WEB DEVELOPMENT', 'VIDEO PRODUCTION']

/* Desktop SEO report visual — desktop only. Browser-style report window
   with animated health score, traffic graph and keyword rankings. */
function SeoVisual() {
  const keywords = [
    ['digital marketing dubai', '#1', 98],
    ['seo agency dubai', '#1', 92],
    ['web design company', '#3', 76],
  ]
  const R = 34
  const CIRC = 2 * Math.PI * R

  return (
    <motion.div
      initial={{ opacity: 0, x: 64 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block lg:col-span-5"
    >
      <div className="absolute -inset-3 rounded-[2.4rem] bg-zorx/15 translate-x-4 translate-y-4 pointer-events-none" />

      {/* browser window */}
      <div className="relative rounded-[1.75rem] overflow-hidden bg-coal border hairline">
        {/* chrome bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b hairline bg-pine">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 flex-1 text-[11px] font-display font-semibold tracking-wider text-fog bg-ink border hairline rounded-full px-4 py-1.5 truncate">
            zorx.ae/seo-report — november
          </span>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[10px] font-display font-bold tracking-[0.28em] text-fog">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zorx opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zorx" />
              </span>
              SEO PERFORMANCE REPORT
            </span>
            <span className="text-[10px] font-display font-bold tracking-[0.24em] text-zorx">LIVE</span>
          </div>

          {/* score + headline stats */}
          <div className="mt-4 flex items-center gap-4">
            <div className="relative w-20 h-20 shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r={R} fill="none" stroke="rgba(12,19,14,.10)" strokeWidth="8" />
                <motion.circle
                  cx="40"
                  cy="40"
                  r={R}
                  fill="none"
                  stroke="#12914a"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  initial={{ strokeDashoffset: CIRC }}
                  animate={{ strokeDashoffset: CIRC * (1 - 0.94) }}
                  transition={{ delay: 0.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display font-extrabold text-2xl text-cream tabular-nums">94</span>
              </div>
            </div>
            <div>
              <p className="font-display font-extrabold text-xl text-cream leading-tight">Site health<br />excellent</p>
              <p className="mt-1 text-xs text-fog">+340% organic traffic / 90 days</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-display font-extrabold text-3xl text-zorx tabular-nums">1.2K</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-fog">keywords top 10</p>
            </div>
          </div>

          {/* traffic graph */}
          <div className="mt-4">
            <div className="flex justify-between text-[10px] font-display font-bold tracking-[0.2em] text-fog mb-2">
              <span>ORGANIC TRAFFIC</span>
              <span className="text-zorx">▲ +340%</span>
            </div>
            <svg viewBox="0 0 300 120" className="w-full h-20" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="seoArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#12914a" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#12914a" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 55, 85].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(12,19,14,.10)" strokeWidth="1" />
              ))}
              <motion.path
                d="M0,104 C40,100 60,80 90,77 C120,74 140,86 170,66 C200,46 230,50 260,28 C275,18 290,15 300,10 L300,120 L0,120 Z"
                fill="url(#seoArea)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              />
              <motion.path
                d="M0,104 C40,100 60,80 90,77 C120,74 140,86 170,66 C200,46 230,50 260,28 C275,18 290,15 300,10"
                fill="none"
                stroke="#12914a"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <div className="flex justify-between text-[9px] font-semibold tracking-[0.18em] text-fog/70 mt-1">
              {['JUL', 'AUG', 'SEP', 'OCT', 'NOV'].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* keyword rankings */}
          <div className="mt-4 space-y-2">
            {keywords.map(([kw, rank, pct], i) => (
              <div key={kw} className="flex items-center gap-3 rounded-xl border hairline bg-ink px-4 py-2.5">
                <span
                  className={`text-[11px] font-display font-extrabold rounded-full px-2.5 py-1 shrink-0 ${
                    rank === '#1' ? 'bg-zorx text-white' : 'border hairline text-fog'
                  }`}
                >
                  {rank}
                </span>
                <span className="text-[13px] font-semibold text-cream/85 truncate">{kw}</span>
                <span className="ml-auto flex items-center gap-2 w-24 shrink-0">
                  <span className="flex-1 h-1.5 rounded-full bg-ink border hairline overflow-hidden">
                    <motion.span
                      className="block h-full bg-gradient-to-r from-zorx-deep to-zorx rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ delay: 0.9 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -top-5 -right-1 md:-right-3 bg-lime text-cream font-display font-bold text-sm px-4 py-2.5 rounded-full shadow-xl animate-floaty">
        ▲ +340% traffic
      </div>
      <div className="absolute -bottom-6 left-4 md:left-2 bg-coal border hairline rounded-2xl px-4 py-3 shadow-2xl animate-floaty [animation-delay:1.8s]">
        <p className="text-[10px] tracking-[0.25em] text-fog uppercase">Google.ae ranking</p>
        <p className="font-display font-extrabold text-xl text-cream">#1 <span className="text-zorx text-sm">SEO</span></p>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} id="top" className="relative overflow-hidden">
      {/* backdrop — unchanged paper background, hairline columns + green wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,black,transparent)] opacity-80" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[480px] glow-a" />
        <motion.div style={{ y: bgY }} className="absolute bottom-0 inset-x-0 h-[420px] bg-gradient-to-t from-pine to-transparent" />
      </div>

      <motion.div style={{ opacity: fade }} className="relative px-5 md:px-10 xl:px-14 pt-32 md:pt-44 pb-14">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-zorx" />
                <span className="text-[11px] font-display font-bold tracking-[0.32em] text-zorx">
                  DIGITAL MARKETING AGENCY — DUBAI
                </span>
              </div>
            </FadeUp>

            {/* headline — campaign copy, band highlight like the creative */}
            <h1 className="mt-7 font-display font-extrabold uppercase leading-[1.0] tracking-[-0.02em] text-cream">
              <span className="block text-lg sm:text-xl lg:text-2xl tracking-[0.18em] text-fog">
                <BlurReveal text="READY TO TAKE OFF" />
              </span>
              <span className="block mt-3 text-[13vw] sm:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                <BlurReveal text="YOUR BRAND" delay={0.12} className="gold-text" />
              </span>
              <span className="mt-3 inline-block bg-lime rounded-2xl px-5 py-2 text-[9vw] sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                <BlurReveal text="TO NEW HEIGHTS" delay={0.24} className="" />
              </span>
            </h1>

            <FadeUp delay={0.4}>
              <p className="mt-7 max-w-xl text-fog leading-relaxed md:text-lg">
                ZORX — <span className="text-cream font-semibold">Fueling Brands Growth</span>. SEO, social,
                branding, websites and film — every dirham tied to revenue.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group btn-shine inline-flex items-center gap-4 bg-zorx-deep text-[#F4F1E6] font-display font-bold text-sm tracking-[0.12em] uppercase pl-8 pr-3 py-3 rounded-full hover:bg-zorx transition-colors"
                >
                  Let&apos;s Work Together
                  <span className="w-10 h-10 rounded-full bg-lime text-cream grid place-items-center text-lg group-hover:rotate-45 transition-transform duration-300">↗</span>
                </motion.a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 border hairline bg-coal px-7 py-[15px] rounded-full text-sm font-display font-bold tracking-[0.15em] uppercase text-cream/80 hover:border-zorx hover:text-cream transition-all"
                >
                  <span className="w-2 h-2 rotate-45 bg-zorx transition-colors" />
                  View Our Work
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <div className="mt-9 flex items-center gap-4">
                <span className="flex text-zorx">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="w-4 h-4" />
                  ))}
                </span>
                <p className="text-sm text-fog">
                  <span className="text-cream font-bold">4.9</span> — trusted by <span className="text-cream font-bold">120+ brands</span> across the UAE
                </p>
              </div>
            </FadeUp>
          </div>

          <SeoVisual />
        </div>

        {/* stats strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 border-t hairline">
          {[
            [120, '+', 0, 'Brands scaled'],
            [3.8, 'x', 1, 'Average ROAS'],
            [98, '%', 0, 'Client retention'],
            [15, 'M+', 0, 'Ad views'],
          ].map(([v, s, d, l], i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pt-5 pr-5 border-l hairline pl-5 first:border-l-0 first:pl-0"
            >
              <div className="font-display font-extrabold text-3xl md:text-4xl text-cream tabular-nums">
                <Counter to={v} suffix={s} decimals={d} />
              </div>
              <div className="mt-1.5 text-[10px] tracking-[0.24em] uppercase text-fog">{l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 text-[10px] tracking-[0.35em] text-fog font-display font-semibold">
          <span className="relative w-2.5 h-2.5 rounded-full bg-zorx animate-pulse inline-block" />
          SCROLL TO EXPLORE
        </div>
      </motion.div>

      {/* ticker */}
      <div className="relative bg-zorx-deep overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-fast py-4 font-display text-[13px] font-bold tracking-[0.24em] text-[#F4F1E6]/90">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {TICKER.map((t) => (
                <span key={t + k} className="mx-8 flex items-center gap-8">
                  {t} <span className="text-lime text-sm">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
