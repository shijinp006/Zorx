import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplitReveal, FadeUp, SectionTag, Counter } from './Reveal'
import { IconSpark, IconTarget, IconBolt, IconUsers } from './icons'

const reasons = [
  { icon: IconSpark, n: '01', title: 'Creative approach', desc: 'Culture-first ideas where Dubai polish meets global trends. Scroll-stopping by design — never templates.' },
  { icon: IconTarget, n: '02', title: 'Results-driven marketing', desc: 'Every campaign tied to revenue. Live dashboards, weekly reports, full honesty on each dirham.' },
  { icon: IconBolt, n: '03', title: 'Modern technology', desc: 'AI-assisted production, automation and current stacks. Faster launches, keener targeting.' },
  { icon: IconUsers, n: '04', title: 'Experienced team', desc: 'Strategists, designers, developers and filmmakers with 6+ years scaling MENA brands.' },
]

export default function WhyZorx() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['3%', '-3%'])

  return (
    <section ref={ref} id="why" className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        style={{ x }}
        aria-hidden="true"
        className="whitespace-nowrap font-display font-extrabold text-[10vw] leading-none text-cream/[0.05] select-none pointer-events-none absolute top-8 left-0"
      >
        WHY ZORX — WHY ZORX — WHY ZORX
      </motion.div>

      <div className="relative px-5 md:px-10 xl:px-14">
        <SectionTag index="03" label="Why ZORX" />
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-extrabold tracking-tight leading-[1.0] text-3xl md:text-5xl text-cream">
            <SplitReveal text="Not just another agency." className="block text-cream/40" />
            <SplitReveal text="Your unfair advantage." delay={0.12} className="block gold-text" />
          </h2>
          <FadeUp delay={0.2}>
            <p className="text-fog md:text-right md:pb-2">Four reasons the city<br className="hidden md:block" /> keeps our number.</p>
          </FadeUp>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            [120, '+', 0, 'Projects delivered'],
            [98, '%', 0, 'Client retention'],
            [3.8, 'x', 1, 'Average ROAS'],
            [48, 'M+', 0, 'AED revenue driven'],
          ].map(([v, s, d, l], i) => (
            <div
              key={l}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              className="rounded-3xl border hairline bg-coal p-7 md:p-8 hover:border-zorx/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-display font-extrabold text-4xl md:text-5xl text-cream tabular-nums">
                <Counter to={v} suffix={s} decimals={d} />
              </div>
              <div className="mt-2 text-[10px] tracking-[0.24em] uppercase text-fog">{l}</div>
              <div className="mt-4 h-[3px] w-8 bg-zorx rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <div
              key={r.n}
              data-aos="flip-up"
              data-aos-delay={(i % 2) * 80}
              className="group rounded-3xl border hairline bg-coal p-8 md:p-10 hover:bg-zorx-deep hover:border-zorx-deep transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-extrabold text-lg text-zorx group-hover:text-lime transition-colors">{r.n}</span>
                <span className="w-12 h-12 rounded-2xl bg-zorx/10 text-zorx grid place-items-center group-hover:bg-white/10 group-hover:text-lime transition-all duration-300">
                  <r.icon className="w-6 h-6" />
                </span>
              </div>
              <h3 className="mt-6 font-display font-extrabold text-2xl tracking-tight text-cream group-hover:text-white transition-colors">{r.title}</h3>
              <p className="mt-3 text-fog leading-relaxed group-hover:text-white/70 transition-colors">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
