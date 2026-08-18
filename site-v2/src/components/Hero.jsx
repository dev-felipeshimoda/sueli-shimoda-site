import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { waLink } from '../wa.js'
import { ArrowRightIcon } from './icons.jsx'

const EASE = [0.16, 1, 0.3, 1]

// A palavra gigante entra letra por letra. Como "Shimoda" é uma palavra só,
// dividir por espaço (como no componente de referência) não produziria escalonamento.
function LettersPullUp({ text, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const letters = text.split('')

  return (
    <span ref={ref} className={`pullup ${className}`} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pullup-letter"
          initial={reduce ? false : { y: '22%', opacity: 0 }}
          animate={isInView ? { y: '0%', opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: i * 0.06, ease: EASE }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '26%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section className="hero-v2" id="inicio" ref={ref}>
      <div className="hero-v2-frame">
        <motion.div className="hero-v2-bg" style={reduce ? undefined : { y: bgY, scale: bgScale }} />
        <div className="hero-v2-noise" aria-hidden="true" />
        <div className="hero-v2-grade" aria-hidden="true" />

        <motion.div
          className="hero-v2-content"
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <div className="hero-v2-grid">
            <div className="hero-v2-mark">
              <motion.span
                className="eyebrow"
                initial={reduce ? false : { y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              >
                Direito de Família &middot; Previdenciário
              </motion.span>
              <h1 className="hero-v2-word">
                <LettersPullUp text="Shimoda" />
              </h1>
            </div>

            <div className="hero-v2-aside">
              <motion.p
                className="hero-v2-lead"
                initial={reduce ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              >
                Advocacia humanizada para os momentos que mais importam. Atuação próxima,
                sigilosa e com a experiência de quem entende o seu lado.
              </motion.p>

              <motion.div
                className="hero-v2-actions"
                initial={reduce ? false : { y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.72, ease: EASE }}
              >
                <a
                  href={waLink('Olá, Sueli! Vim pelo seu site e gostaria de agendar uma conversa.')}
                  target="_blank"
                  rel="noopener"
                  className="btn-pill"
                >
                  Agendar conversa
                  <span className="btn-pill-dot">
                    <ArrowRightIcon />
                  </span>
                </a>
                <a href="#areas" className="hero-v2-link">
                  Conhecer as áreas
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
