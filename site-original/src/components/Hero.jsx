import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { waLink } from '../wa.js'
import { WhatsAppIcon } from './icons.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)

  // Parallax no scroll: o fundo sobe mais devagar que o conteúdo.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section className="hero" id="inicio" ref={ref}>
      <motion.div className="hero-bg" style={{ y: bgY, scale: bgScale }} />
      <div className="hero-overlay" />
      <div className="hero-overlay-2" />
      <motion.div className="wrap" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          className="hero-inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            Direito de Família &middot; Previdenciário
          </motion.span>
          <motion.h1 variants={item}>
            Seus direitos merecem
            <br />
            <em>cuidado, não só um processo.</em>
          </motion.h1>
          <motion.p className="lead" variants={item}>
            Advocacia humanizada para os momentos que mais importam. Atuação próxima,
            sigilosa e com a experiência de quem entende o seu lado.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <motion.a
              href={waLink('Olá, Sueli! Vim pelo seu site e gostaria de agendar uma conversa.')}
              target="_blank"
              rel="noopener"
              className="btn btn-gold"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <WhatsAppIcon />
              Agendar conversa
            </motion.a>
            <motion.a href="#areas" className="btn btn-ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              Conhecer as áreas
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
