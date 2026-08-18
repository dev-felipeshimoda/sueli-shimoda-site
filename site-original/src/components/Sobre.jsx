import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function Sobre() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const badgeY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section className="sobre" id="sobre" ref={ref}>
      <div className="wrap sobre-grid">
        <motion.div
          className="sobre-media"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="accent"></div>
          <div className="frame">
            <img src="/assets/sueli-fundo-branco.jpg" alt="Sueli Shimoda, advogada" />
          </div>
          <motion.div className="badge" style={{ y: badgeY }}>
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <b>SS</b>
              <span>Atendimento humanizado</span>
            </motion.div>
          </motion.div>
        </motion.div>
        <Reveal className="sobre-text" x={40}>
          <span className="eyebrow">Quem é a Sueli</span>
          <hr className="rule" />
          <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,46px)', fontWeight: 700, lineHeight: 1.1 }}>
            Mais que advogada,
            <br />
            sua parceira na busca por{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>justiça e dignidade.</em>
          </h2>
          <div style={{ height: 24 }}></div>
          <p className="body">
            Sou <strong>Sueli Shimoda</strong>, advogada dedicada ao Direito de Família e ao
            Direito Previdenciário. Escolhi essas áreas porque vivi de perto o que meus
            clientes vivem.
          </p>
          <p className="body">
            Passei pelo meu próprio divórcio e ajudei minha mãe a conquistar a
            aposentadoria, enfrentando a burocracia do INSS. Foram essas experiências que me
            ensinaram a tratar cada caso como uma história, e não apenas como um processo.
          </p>
          <p className="quote">
            "Cada pessoa que me procura está vivendo um momento difícil. Meu papel é cuidar
            disso com técnica, respeito e proximidade."
          </p>
          <div className="mini-stats">
            <div className="ms">
              <b>Família</b>
              <span>divórcio, guarda e pensão</span>
            </div>
            <div className="ms">
              <b>INSS</b>
              <span>aposentadoria e benefícios</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
