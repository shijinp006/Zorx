import { Fragment, useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/* Word-by-word masked text reveal on scroll into view.
   NOTE: a real breakable space sits BETWEEN word masks so long
   lines wrap normally instead of overflowing (the nbsp inside
   the mask can't break, it only keeps spacing during reveal). */
export function SplitReveal({ text, className = '', delay = 0, as: Tag = 'span' }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: reduce ? 0 : '115%', rotate: reduce ? 0 : 5 }}
              whileInView={{ y: '0%', rotate: 0 }}
              viewport={{ once: false, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}

/* Cinematic blur-fade headline reveal — words materialise from a soft
   haze with a gentle rise (staggered). Gaps use flexbox (never raw
   whitespace) so spacing is identical on every browser and width. */
export function BlurReveal({ text, className = '', delay = 0, as: Tag = 'span' }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  return (
    <Tag className={`${className} flex flex-wrap gap-x-[0.22em] gap-y-[0.08em]`} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] will-change-transform"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97, filter: 'blur(12px)' }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block">{w}</span>
        </motion.span>
      ))}
    </Tag>
  )
}

/* AOS-style set — fade-up / down / left / right, zoom-in, flip (ease-out-cubic, lazy on scroll) */
const AOS_EASE = [0.22, 1, 0.36, 1]

export function FadeUp({ children, delay = 0, y = 36, className = '', once = false }) {
  return (
    <div className={className} data-aos="fade-up" data-aos-delay={Math.round(delay * 1000)} data-aos-once={once}>
      {children}
    </div>
  )
}

export function FadeDown({ children, delay = 0, className = '' }) {
  return (
    <div className={className} data-aos="fade-down" data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  )
}

export function FadeLeft({ children, delay = 0, className = '' }) {
  return (
    <div className={className} data-aos="fade-left" data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  )
}

export function FadeRight({ children, delay = 0, className = '' }) {
  return (
    <div className={className} data-aos="fade-right" data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  )
}

export function ZoomIn({ children, delay = 0, className = '' }) {
  return (
    <div className={className} data-aos="zoom-in" data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  )
}

export function FlipIn({ children, delay = 0, className = '' }) {
  return (
    <div className={className} data-aos="flip-up" data-aos-delay={Math.round(delay * 1000)}>
      {children}
    </div>
  )
}

/* Image reveal with clip + shutter wipe */
export function ImageReveal({ src, alt, className = '', imgClassName = '', shutter = '#0a3d22', eager = false }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.28, clipPath: 'inset(10% 7% 10% 7% round 24px)' }}
        whileInView={{ scale: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
        viewport={{ once: false, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0 origin-left"
        style={{ background: shutter }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: false, margin: '-15% 0px' }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />
    </div>
  )
}

/* Section eyebrow — tone="light" (paper) or "dark" (pine) */
export function SectionTag({ index, label, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <FadeUp>
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex items-center gap-2.5 font-display text-[11px] md:text-xs font-bold tracking-[0.24em] ${
            dark ? 'text-[#F4F1E6]' : 'text-cream'
          }`}
        >
          <span className="w-8 h-px bg-zorx inline-block" />
          {index}
        </span>
        <span
          className={`font-display text-[11px] md:text-xs font-bold tracking-[0.24em] uppercase ${
            dark ? 'text-[#F4F1E6]/60' : 'text-fog'
          }`}
        >
          {label}
        </span>
        <span
          className={`h-px flex-1 bg-gradient-to-r ${
            dark ? 'from-white/25 to-transparent' : 'from-ink/20 to-transparent'
          }`}
        />
      </div>
    </FadeUp>
  )
}

/* Animated number counter */
export function Counter({ to, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-20% 0px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      ref.current.textContent = to.toFixed(decimals) + suffix
      return
    }
    const dur = 1100
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      if (ref.current) ref.current.textContent = (to * eased).toFixed(decimals) + suffix
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}

/* Scroll-linked word illumination (opacity follows scroll) */
function Word({ progress, range, accent, children }) {
  const opacity = useTransform(progress, range, [0.13, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.26em] ${accent ? 'text-zorx' : ''}`}
    >
      {children}
    </motion.span>
  )
}

export function ScrollWords({ text, accentWords = [], className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const clean = w.replace(/[^a-zA-Z]/g, '').toLowerCase()
        const accent = accentWords.some((a) => a.toLowerCase() === clean)
        return (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={accent}>
            {w}
          </Word>
        )
      })}
    </p>
  )
}
