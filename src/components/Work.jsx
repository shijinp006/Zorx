import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplitReveal, FadeUp, SectionTag } from './Reveal'

const projects = [
  { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&auto=format&fit=crop', cat: 'Branding + Social', title: 'LUXE Abaya — Dubai fashion house', stat: '+212% sales', span: 'md:col-span-7', aspect: 'aspect-[16/11] md:aspect-[16/10]' },
  { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop', cat: 'Real Estate Ads', title: 'Marina Heights — lead engine', stat: '4.2x ROAS', span: 'md:col-span-5', aspect: 'aspect-[16/11] md:aspect-auto md:h-full md:min-h-[420px]' },
  { img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop', cat: 'Restaurant Marketing', title: 'Emirates Food Co. — full rebrand', stat: '1.2M views', span: 'md:col-span-4', aspect: 'aspect-[4/3]' },
  { img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&auto=format&fit=crop', cat: 'Web Development', title: 'FinTech portal — Next.js build', stat: '0.8s load', span: 'md:col-span-4', aspect: 'aspect-[4/3]' },
  { img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop', cat: 'Video Production', title: 'Desert Dreams — brand film', stat: '850K plays', span: 'md:col-span-4', aspect: 'aspect-[4/3]' },
  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop', cat: 'SEO + Content', title: 'Clinic Care — #1 across Dubai searches', stat: '+340% traffic', span: 'md:col-span-12', aspect: 'aspect-[16/10] md:aspect-[21/8]' },
]

function ParallaxThumb({ src, alt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-9%', '9%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0f2e1c] via-[#0a3d22] to-[#07130c]">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute inset-0 transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          style={{ y }}
          className="absolute left-0 -top-[9%] h-[118%] w-full object-cover will-change-transform"
        />
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-zorx-deep overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="relative px-5 md:px-10 xl:px-14">
        <SectionTag index="04" label="Our Work" tone="dark" />
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-extrabold tracking-tight leading-[1.0] text-3xl md:text-5xl text-[#F4F1E6]">
            <SplitReveal text="Work that speaks" className="block" />
            <SplitReveal text="in results." delay={0.12} className="block text-lime" />
          </h2>
          <FadeUp delay={0.2}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 text-sm font-bold text-[#F4F1E6] border border-white/25 rounded-full px-6 py-3.5 hover:bg-[#F4F1E6] hover:text-zorx-deep hover:border-[#F4F1E6] transition-all"
            >
              Become our next case study
              <span className="group-hover:rotate-45 transition-transform inline-block">↗</span>
            </a>
          </FadeUp>
        </div>

        <div className="mt-12 grid md:grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#contact"
              data-aos="zoom-in"
              data-aos-delay={(i % 3) * 60}
              className={`group cursor-pointer relative rounded-[1.5rem] overflow-hidden bg-[#07130c] border border-white/15 block ${p.span} ${p.aspect} hover:border-lime/60 hover:shadow-[0_30px_80px_rgba(0,0,0,.45)] hover:-translate-y-2 transition-all duration-500`}
            >
              <ParallaxThumb src={p.img} alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 right-4 md:top-5 md:left-5 md:right-5 flex justify-between items-center">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] bg-black/60 border border-white/25 text-white rounded-full px-3.5 py-1.5">
                  {p.cat.toUpperCase()}
                </span>
                <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-lime text-[#0C130E] grid place-items-center text-lg opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-45 transition-all duration-300">
                  ↗
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <span className="inline-block text-[11px] md:text-xs font-bold bg-lime text-[#0C130E] rounded-full px-3.5 py-1.5 mb-3">
                  {p.stat}
                </span>
                <h3 className="font-display font-extrabold tracking-tight text-white text-lg md:text-xl leading-tight">
                  {p.title}
                </h3>
                <div className="mt-3 h-[3px] w-10 group-hover:w-full bg-gradient-to-r from-lime to-white rounded-full transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
