import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplitReveal, FadeUp } from './Reveal'

const SERVICES_LIST = [
  'Digital Marketing',
  'Social Media Marketing',
  'Branding & Design',
  'Website Development',
  'SEO',
  'Video Production',
]

function LeadForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICES_LIST[0] })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    const subject = encodeURIComponent(`New lead — ${form.service} — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nSource: ZORX website CTA`)
    window.location.href = `mailto:hello@zorx.ae?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-zorx/40 bg-zorx/[0.07] px-6 py-8 text-center">
        <p className="font-display font-extrabold text-2xl text-zorx-deep">You&apos;re in! ✦</p>
        <p className="mt-2 text-white/70 text-sm md:text-base">
          Thanks {form.name.split(' ')[0]} — we&apos;ve opened your email app. Hit send and we&apos;ll reply within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-bold text-white/70 underline underline-offset-4 hover:text-lime"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const field =
    'rounded-2xl bg-coal border hairline px-5 py-4 text-[15px] text-cream placeholder:text-fog/70 outline-none focus:border-zorx transition-colors w-full'

  return (
    <form onSubmit={submit} className="grid sm:grid-cols-[1fr_1fr_1fr_auto] gap-3 text-left">
      <label className="sr-only" htmlFor="cta-name">Your name</label>
      <input
        id="cta-name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your name"
        required
        autoComplete="name"
        className={field}
      />
      <label className="sr-only" htmlFor="cta-phone">Phone / WhatsApp</label>
      <input
        id="cta-phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder="Phone / WhatsApp"
        required
        inputMode="tel"
        autoComplete="tel"
        className={field}
      />
      <label className="sr-only" htmlFor="cta-service">Service needed</label>
      <select
        id="cta-service"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className={`${field} appearance-none cursor-pointer`}
      >
        {SERVICES_LIST.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="btn-shine rounded-2xl bg-zorx-deep text-white font-display font-bold px-7 py-4 text-[15px] hover:bg-zorx transition-colors whitespace-nowrap"
      >
        Get Callback ↗
      </motion.button>
    </form>
  )
}

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-3 md:px-6 overflow-hidden">
      <div
        data-aos="zoom-in"
        className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-zorx-deep via-[#0e5c30] to-[#07130c] px-6 py-16 md:p-20 text-center noise"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[620px] h-[340px] glow-lime" />
        <div className="absolute -bottom-48 -left-28 w-[440px] h-[440px] rounded-full border-[30px] border-white/[0.06]" />
        <div className="absolute -bottom-48 -right-28 w-[440px] h-[440px] rounded-full border-[30px] border-lime/15" />

        <div className="relative">
          <FadeUp>
            <span className="inline-block bg-black/25 border border-white/25 rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.3em] text-white/90">
              06 — READY WHEN YOU ARE
            </span>
          </FadeUp>
          <h2 className="mt-7 font-display font-extrabold uppercase tracking-tight leading-[0.98] text-4xl sm:text-5xl md:text-7xl text-white">
            <SplitReveal text="LET'S GROW" className="block" />
            <SplitReveal text="YOUR BRAND." delay={0.12} className="block text-lime" />
          </h2>
          <FadeUp delay={0.25}>
            <p className="mt-6 text-white/70 md:text-lg max-w-2xl mx-auto">
              Free 30-minute strategy call. No fluff — just a clear roadmap to scale your
              brand in Dubai and across the GCC.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.a
                href="mailto:hello@zorx.ae"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group btn-shine inline-flex items-center gap-3 bg-lime text-cream font-display font-extrabold rounded-2xl pl-8 pr-2.5 py-2.5 text-base md:text-lg hover:shadow-[0_0_70px_rgba(205,244,99,.45)] transition-shadow"
              >
                Get Free Strategy Call
                <span className="w-12 h-12 rounded-xl bg-zorx-deep text-lime grid place-items-center text-2xl group-hover:rotate-45 transition-transform duration-300">
                  ↗
                </span>
              </motion.a>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 text-white rounded-2xl px-8 py-4 font-semibold hover:bg-white hover:text-zorx-deep transition-all"
              >
                WhatsApp Us ↗
              </a>
            </div>
            <div className="mt-8 mx-auto max-w-4xl rounded-[1.5rem] border border-white/20 bg-black/25 p-4 md:p-5">
              <LeadForm />
              <p className="mt-3 text-center text-xs text-white/55">
                Prefer email? We reply within 24 hours — no spam, no pushy sales.
              </p>
            </div>
            <a
              href="mailto:hello@zorx.ae"
              className="mt-8 inline-block font-display font-extrabold text-xl md:text-2xl tracking-tight text-white link-sweep"
            >
              hello@zorx.ae
            </a>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span>+971 50 000 0000</span>
              <span className="text-lime">✦</span>
              <span>Business Bay, Dubai</span>
              <span className="text-lime">✦</span>
              <span>Mon–Sat • 9am–7pm GST</span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
