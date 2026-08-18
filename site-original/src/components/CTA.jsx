import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { waLink } from '../wa.js'
import { WhatsAppIcon } from './icons.jsx'

export default function CTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section className="cta pad" id="contato" ref={ref}>
      <motion.div className="cta-bg" style={{ y: bgY }} />
      <Reveal className="wrap">
        <div className="mono-big">SS</div>
        <span className="eyebrow">Vamos conversar</span>
        <h2>Conte comigo para cuidar do que importa para você</h2>
        <p>
          O primeiro passo é uma conversa. Sem compromisso, com total sigilo. Me chame no
          WhatsApp e vamos entender o seu caso juntos.
        </p>
        <div className="cta-actions">
          <motion.a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="btn btn-gold"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <WhatsAppIcon />
            Chamar no WhatsApp
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
