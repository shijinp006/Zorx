import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyZorx from './components/WhyZorx'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function BackToTop({ getLenis }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const goTop = () => {
    const lenis = getLenis?.()
    if (lenis) lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={goTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-zorx-deep text-[#F4F1E6] grid place-items-center text-xl font-bold shadow-[0_12px_35px_rgba(10,61,34,.4)] hover:-translate-y-1 transition-transform"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const lenisRef = useRef(null)

  /* Lenis buttery smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisRef.current = lenis
    let raf
    const loop = (t) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    /* glide anchor links through lenis */
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        const el = document.querySelector(id)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el, { offset: -84 })
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
      document.removeEventListener('click', onClick)
    }
  }, [])

  /* AOS scroll animations — fade / zoom / flip as sections enter,
     replaying in both scroll directions */
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: false, mirror: true, offset: 120 })
    AOS.refresh()
  }, [])

  return (
    <div className="min-h-screen bg-ink text-cream overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyZorx />
        <Work />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop getLenis={() => lenisRef.current} />
    </div>
  )
}
