import { FadeUp } from './Reveal'
import Logo from './Logo'

const SOCIALS = [
  ['Instagram', 'https://instagram.com'],
  ['X (Twitter)', 'https://x.com'],
  ['LinkedIn', 'https://linkedin.com'],
  ['YouTube', 'https://youtube.com'],
  ['TikTok', 'https://tiktok.com'],
]

export default function Footer() {
  return (
    <footer className="relative bg-zorx-deep text-[#F4F1E6] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative px-5 md:px-10 xl:px-14 pt-16 md:pt-24 pb-8">
        <div className="grid md:grid-cols-12 gap-10">
          <FadeUp className="md:col-span-5">
            <div>
              <a href="#top" className="inline-block bg-[#F4F1E6] rounded-2xl px-5 py-3">
                <Logo variant="footer" />
              </a>
              <p className="mt-6 text-white/70 leading-relaxed max-w-sm">
                Premium digital marketing agency in Dubai. We make brands impossible to ignore.
              </p>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2.5 bg-lime text-cream font-display font-extrabold text-sm rounded-full pl-6 pr-2 py-2 hover:shadow-[0_0_40px_rgba(205,244,99,.4)] transition-shadow"
              >
                Start a project
                <span className="w-9 h-9 rounded-full bg-zorx-deep text-lime grid place-items-center group-hover:rotate-45 transition-transform">↗</span>
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="md:col-span-2">
            <div>
              <h4 className="font-display font-extrabold text-[11px] tracking-[0.28em] text-white/40">MENU</h4>
              <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                {[
                  ['About', '#about'],
                  ['Services', '#services'],
                  ['Why ZORX', '#why'],
                  ['Work', '#work'],
                  ['Contact', '#contact'],
                ].map(([t, h]) => (
                  <li key={t}>
                    <a href={h} className="hover:text-lime hover:pl-1.5 transition-all">{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.14} className="md:col-span-2">
            <div>
              <h4 className="font-display font-extrabold text-[11px] tracking-[0.28em] text-white/40">SERVICES</h4>
              <ul className="mt-5 space-y-3 text-[15px] text-white/75">
                {['Digital Marketing', 'Social Media', 'Branding & Design', 'Web Development', 'SEO', 'Video Production'].map((t) => (
                  <li key={t}>
                    <a href="#services" className="hover:text-lime hover:pl-1.5 transition-all">{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="md:col-span-3">
            <div>
              <h4 className="font-display font-extrabold text-[11px] tracking-[0.28em] text-white/40">SOCIALS</h4>
              <ul className="mt-5 space-y-1">
                {SOCIALS.map(([t, h]) => (
                  <li key={t}>
                    <a
                      href={h}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-white/15 py-2.5 text-[15px] text-white/75 hover:text-lime hover:border-lime/50 transition-colors"
                    >
                      {t}
                      <span className="group-hover:rotate-45 group-hover:translate-x-1 transition-all inline-block">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2 text-sm text-white/60">
                <li>Business Bay, Dubai, UAE</li>
                <li>
                  <a href="mailto:hello@zorx.ae" className="text-lime hover:underline">hello@zorx.ae</a>
                  {'  •  '}
                  <a href="tel:+971500000000" className="hover:text-lime">+971 50 000 0000</a>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <a
            href="#top"
            aria-label="Back to top"
            className="mt-14 block text-center font-display font-extrabold tracking-tight leading-[0.85] text-[18vw] md:text-[9rem] text-white/10 hover:text-white/20 transition-colors duration-700 select-none"
          >
            ZORX
          </a>
        </FadeUp>

        <div className="mt-6 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <span>© 2026 ZORX Digital Marketing Agency — Dubai. All rights reserved.</span>
          <span>Designed & built with obsession in Dubai</span>
        </div>
      </div>
    </footer>
  )
}
