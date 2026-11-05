import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeUp, ImageReveal, SectionTag, ScrollWords } from './Reveal'
import { IconCheck, IconPin, IconBolt, IconTarget, IconUsers } from './icons'

const PILLARS = [
  { icon: IconPin, title: 'Dubai at heart', desc: 'Business Bay studio. Fluent in GCC luxury, bilingual craft, local soul.' },
  { icon: IconBolt, title: 'Modern engine', desc: 'AI-assisted production and current stacks. Idea to launch in weeks.' },
  { icon: IconTarget, title: 'Revenue, always', desc: 'No vanity metrics. Every dirham traced to pipeline and sales.' },
  { icon: IconUsers, title: 'Senior hands', desc: 'Strategists and makers with 6+ years across the MENA region.' },
]

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yA = useTransform(scrollYProgress, [0, 1], [50, -50])
  const yB = useTransform(scrollYProgress, [0, 1], [90, -30])

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-20 right-0 w-[480px] h-[480px] glow-a pointer-events-none" />
      <div className="px-5 md:px-10 xl:px-14">
        <SectionTag index="01" label="About ZORX" />

        <ScrollWords
          text="A Dubai-born growth agency. Ideas with a premium finish, media with merchant discipline, and reporting you will actually enjoy reading."
          accentWords={['growth', 'agency']}
          className="mt-9 font-display font-extrabold tracking-tight leading-[1.1] text-2xl sm:text-3xl md:text-[2.6rem] max-w-5xl text-cream"
        />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <FadeUp className="lg:col-span-5">
            <p className="font-serif-accent text-xl md:text-2xl text-cream/85 leading-relaxed border-l-[3px] border-zorx pl-6">
              From Business Bay startups to Sheikh Zayed Road institutions — culture-first
              storytelling backed by ruthless performance data.
            </p>
            <p className="mt-6 text-fog leading-relaxed">
              Strategy before spend. Bilingual creative that converts. Weekly reporting
              with zero jargon — the house standard since 2019.
            </p>
            <ul className="mt-8 rounded-3xl border hairline bg-coal overflow-hidden">
              {[
                'Full-funnel strategy before a single dirham is spent',
                'Bilingual creative — English + Arabic that converts',
                'Transparent weekly reporting, no jargon',
              ].map((c, i) => (
                <li
                  key={c}
                  className="flex items-center gap-4 px-6 py-5 text-[15px] text-cream/85 border-b hairline last:border-b-0 group hover:bg-zorx/[0.06] transition-colors"
                >
                  <span className="font-display font-extrabold text-sm text-zorx">0{i + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{c}</span>
                  <IconCheck className="w-4 h-4 ml-auto text-zorx shrink-0" />
                </li>
              ))}
            </ul>
          </FadeUp>

          <div className="lg:col-span-7 relative">
            <motion.div style={{ y: yA }}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1100&q=80&auto=format&fit=crop"
                alt="ZORX strategy team collaborating"
                className="rounded-[1.75rem] shadow-[0_30px_70px_rgba(12,19,14,.18)] aspect-[16/10]"
                shutter="#0a3d22"
              />
            </motion.div>
            <motion.div style={{ y: yB }} className="relative md:absolute md:-bottom-12 md:-left-8 mt-5 md:mt-0 md:w-[46%]">
              <div className="absolute -inset-2 rounded-[1.4rem] bg-zorx/15 translate-x-3 translate-y-3 pointer-events-none" />
              <ImageReveal
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop"
                alt="Creative workshop session"
                className="rounded-[1.4rem] border hairline shadow-[0_24px_60px_rgba(12,19,14,.20)] aspect-[4/3]"
                shutter="#12914a"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 md:mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 70}
              className="group cursor-pointer rounded-3xl border hairline bg-coal p-7 md:p-8 hover:border-zorx/50 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(12,19,14,.12)] transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-2xl bg-zorx/10 text-zorx grid place-items-center group-hover:bg-zorx group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <p.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-extrabold text-xl tracking-tight text-cream">{p.title}</h3>
              <p className="mt-2 text-sm text-fog leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
