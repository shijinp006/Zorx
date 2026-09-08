import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* Dark Luxury loader — serif wordmark, hairline rule, gold progress line */

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v += Math.floor(Math.random() * 8) + 5
      if (v >= 100) {
        v = 100
        clearInterval(id)
        setTimeout(() => {
          setExit(true)
          setTimeout(() => onDone?.(), 850)
        }, 400)
      }
      setCount(v)
    }, 95)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {!exit ? (
        <motion.div
          key="lux-loader"
          className="fixed inset-0 z-[100] bg-ink text-cream flex flex-col justify-between"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between px-6 md:px-12 pt-6 text-[10px] font-display font-semibold tracking-[0.4em] text-cream/40">
            <span>MAISON ZORX</span>
            <span>DUBAI — {String(count).padStart(3, '0')}%</span>
          </div>

          <div className="px-6 text-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.32em' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-lux text-[15vw] sm:text-7xl md:text-8xl text-cream leading-none pl-[0.32em]"
            >
              ZORX
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-6 h-px w-48 md:w-72 origin-center bg-gradient-to-r from-transparent via-lime to-transparent"
            />
            <p className="mt-5 text-[10px] md:text-[11px] font-display tracking-[0.5em] text-lime/80 pl-[0.5em]">
              FUELING BRANDS GROWTH
            </p>
          </div>

          <div className="px-6 md:px-12 pb-8">
            <div className="flex justify-between text-[10px] tracking-[0.3em] text-cream/35 font-display mb-3">
              <span>PREPARING THE HOUSE</span>
              <span className="font-lux italic text-sm tracking-normal text-cream/60">à Dubaï</span>
            </div>
            <div className="h-px bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-zorx-deep via-lime to-[#f5e7c1] transition-all duration-200"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="lux-curtain"
          className="fixed inset-0 z-[100] bg-coal grid place-items-center"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="font-lux italic text-2xl gold-text">merci.</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
