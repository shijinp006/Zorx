import { FadeUp, SectionTag } from './Reveal'
import { IconStar } from './icons'

const QUOTES = [
  { q: 'ZORX tripled our online orders in 90 days. The best agency decision we ever made.', n: 'Amina R.', r: 'Founder, LUXE Abaya', init: 'AR', g: 'from-zorx-deep to-zorx' },
  { q: '4.2x ROAS on our Marina launch. Their ads simply print qualified leads.', n: 'James D.', r: 'Sales Director, Marina Heights', init: 'JD', g: 'from-amber-500 to-orange-600' },
  { q: 'Our new website loads instantly and converts twice as well. Flawless delivery.', n: 'Omar K.', r: 'CEO, FinTech Portal', init: 'OK', g: 'from-sky-500 to-indigo-600' },
  { q: 'From branding to reels, everything feels premium. Our bookings exploded.', n: 'Sara M.', r: 'Owner, Emirates Food Co.', init: 'SM', g: 'from-rose-500 to-pink-600' },
  { q: 'Number one on Google for every keyword that matters. Enough said.', n: 'Dr. Huda A.', r: 'Director, Clinic Care', init: 'HA', g: 'from-teal-500 to-emerald-600' },
  { q: 'The brand film gave me goosebumps. 850K organic plays and counting.', n: 'Rashid T.', r: 'CMO, Desert Dreams', init: 'RT', g: 'from-violet-500 to-purple-600' },
]

function Card({ t }) {
  return (
    <figure className="w-[78vw] max-w-[300px] md:max-w-none md:w-[380px] shrink-0 cursor-pointer rounded-3xl border hairline bg-coal p-5 sm:p-6 md:p-7 flex flex-col justify-between min-h-[230px] shadow-[0_16px_40px_rgba(12,19,14,.08)] hover:border-zorx/50 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(12,19,14,.14)] transition-all duration-300">
      <div>
        <div className="flex text-zorx gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} className="w-4 h-4" />
          ))}
        </div>
        <blockquote className="mt-4 text-[15px] leading-relaxed text-cream/90">“{t.q}”</blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.g} grid place-items-center font-display font-extrabold text-xs text-white shrink-0`}>
          {t.init}
        </span>
        <div>
          <div className="font-display font-extrabold text-sm text-cream">{t.n}</div>
          <div className="text-xs text-fog">{t.r}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="px-5 md:px-10 xl:px-14 flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div>
          <SectionTag index="05" label="Client Love" />
          <h2 className="mt-7 font-display font-extrabold tracking-tight leading-[1.0] text-3xl md:text-5xl text-cream">
            Brands that grow <span className="gold-text">with ZORX.</span>
          </h2>
        </div>
        <FadeUp delay={0.15}>
          <p className="flex items-center gap-2 font-display font-extrabold text-lg text-cream border-b-[3px] border-zorx pb-1 w-fit">
            <span className="flex text-zorx">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="w-4 h-4" />
              ))}
            </span>
            4.9 average rating
          </p>
        </FadeUp>
      </div>

      <FadeUp delay={0.15}>
        <div className="mt-12 overflow-hidden mask-x">
          <div className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...QUOTES, ...QUOTES].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="mt-5 overflow-hidden mask-x hidden md:block">
          <div className="flex w-max animate-marquee-rev gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...QUOTES, ...QUOTES].reverse().map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
