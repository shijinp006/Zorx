import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Logo from './Logo'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why ZORX', href: '#why' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const ids = ['top', 'about', 'services', 'why', 'work', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(`#${en.target.id}`)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-[3px] w-full origin-left z-[60] bg-gradient-to-r from-zorx-deep via-zorx to-lime"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink shadow-[0_12px_40px_rgba(12,19,14,.10)]' : 'bg-transparent'
        }`}
      >
        <nav className="w-full flex items-center justify-between gap-4 px-5 md:px-10 xl:px-14 py-3">
          <a href="#top" aria-label="ZORX home" className="shrink-0">
            <Logo variant="nav" />
          </a>

          <div className="hidden lg:flex items-center gap-9 text-[11px] font-display font-bold tracking-[0.24em] text-cream/60">
            {links.map((l) => {
              const isActive = active === l.href
              return (
                <a
                  key={l.label}
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative uppercase transition-colors py-2 ${isActive ? 'text-cream' : 'hover:text-cream'}`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left bg-zorx transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden xl:inline text-[10px] tracking-[0.3em] text-fog font-display font-semibold mr-2">
              EST. 2019 — DUBAI
            </span>
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-3 bg-zorx-deep text-[#F4F1E6] font-display font-bold text-[12px] tracking-[0.16em] uppercase px-6 py-3.5 rounded-full hover:bg-zorx transition-colors duration-300"
            >
              Let&apos;s Work Together
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden w-11 h-11 grid place-items-center"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-[2.5px] bg-cream transition-all ${open ? 'rotate-45 translate-y-[8px]' : ''}`} />
                <span className={`block w-6 h-[2.5px] bg-cream transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[2.5px] bg-cream transition-all ${open ? '-rotate-45 -translate-y-[8px]' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
        <div
          className={`h-px w-full transition-opacity duration-300 ${
            scrolled ? 'opacity-100 bg-gradient-to-r from-transparent via-ink/20 to-transparent' : 'opacity-0'
          }`}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink pt-28 px-8 lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className={`font-display font-extrabold text-2xl py-3 border-b hairline flex justify-between items-center ${
                    active === l.href ? 'text-zorx' : 'text-cream'
                  }`}
                >
                  {l.label}
                  <span className="text-zorx text-xl">↗</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-10 bg-zorx-deep text-[#F4F1E6] text-center font-display font-bold tracking-[0.15em] uppercase text-sm py-5 rounded-2xl"
              >
                Let&apos;s Work Together ↗
              </a>
              <p className="mt-8 text-center text-[10px] tracking-[0.4em] text-fog">BUSINESS BAY — DUBAI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
