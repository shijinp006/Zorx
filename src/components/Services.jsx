import { SplitReveal, FadeUp, SectionTag } from './Reveal'
import { IconTrend, IconChat, IconSpark, IconCode, IconSearch, IconPlay, IconArrow } from './icons'

const services = [
  { icon: IconTrend, title: 'Digital Marketing', desc: 'Full-funnel paid media across Google, Meta and TikTok — budgets handled like our own capital, engineered for ROAS.', tags: ['PPC', 'Media Buying', 'Funnels'] },
  { icon: IconChat, title: 'Social Media Marketing', desc: 'Always-on content engines: calendars, reels and community that turn followers into repeat customers.', tags: ['Instagram', 'TikTok', 'LinkedIn'] },
  { icon: IconSpark, title: 'Branding & Graphic Design', desc: 'Identities with a premium Dubai-market finish — logos, guidelines and systems built to be remembered.', tags: ['Logo', 'Identity', 'Guidelines'] },
  { icon: IconCode, title: 'Website Development', desc: 'Blazing-fast React and e-commerce builds. Conversion-first layouts with SEO baked in from line one.', tags: ['React', 'E-commerce', 'SEO-ready'] },
  { icon: IconSearch, title: 'SEO', desc: 'Own page one on Google.ae. Technical repair, Arabic + English content and authority that compounds monthly.', tags: ['Local SEO', 'Technical', 'Content'] },
  { icon: IconPlay, title: 'Video Production', desc: 'Cinematic brand films and performance ads — scripted, shot and graded in 4K across Dubai locations.', tags: ['Reels', 'Ads', 'Drone'] },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-coal border-y hairline overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] glow-top pointer-events-none" />
      <div className="relative px-5 md:px-10 xl:px-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionTag index="02" label="Our Services" />
            <h2 className="mt-8 font-display font-extrabold tracking-tight leading-[1.02] text-3xl md:text-5xl text-cream">
              <SplitReveal text="Everything your" className="block" />
              <SplitReveal text="brand needs." delay={0.12} className="block gold-text" />
            </h2>
            <FadeUp delay={0.2}>
              <p className="mt-6 text-fog leading-relaxed">
                Six disciplines, one team. Pick a craft — or get a complimentary
                30-minute growth audit and we will map the lot.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 bg-zorx-deep text-[#F4F1E6] font-display font-bold text-[12px] tracking-[0.18em] uppercase px-7 py-4 rounded-full hover:bg-zorx transition-colors"
              >
                Claim free audit <span>↗</span>
              </a>
            </FadeUp>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {services.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="group grid sm:grid-cols-[auto_1fr_auto] items-center gap-5 rounded-3xl border hairline bg-ink p-6 md:p-8 hover:border-zorx/50 hover:shadow-[0_24px_60px_rgba(12,19,14,.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex sm:flex-col items-center gap-4">
                <span className="font-display font-extrabold text-sm text-zorx">0{i + 1}</span>
                <span className="w-14 h-14 rounded-2xl bg-zorx text-white grid place-items-center shadow-[0_14px_30px_rgba(18,145,74,.35)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <s.icon className="w-7 h-7" />
                </span>
              </span>
              <span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-cream group-hover:translate-x-1 transition-transform duration-300">
                  {s.title}
                </h3>
                <p className="mt-2 text-fog leading-relaxed text-[15px]">{s.desc}</p>
                <span className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] font-display font-bold tracking-[0.18em] uppercase text-fog border hairline rounded-full px-3.5 py-1.5 bg-coal">
                      {t}
                    </span>
                  ))}
                </span>
              </span>
              <span className="hidden sm:grid w-[52px] h-[52px] shrink-0 rounded-full border hairline place-items-center text-fog group-hover:bg-zorx-deep group-hover:text-white group-hover:border-zorx-deep group-hover:rotate-45 transition-all duration-300">
                <IconArrow className="w-5 h-5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
