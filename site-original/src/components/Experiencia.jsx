import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal.jsx'

const features = [
  {
    title: 'Atendimento sigiloso',
    text: 'Sua história é tratada com total confidencialidade, do primeiro contato à resolução.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Linguagem clara',
    text: 'Explico cada etapa sem juridiquês, para você decidir com segurança e tranquilidade.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Acompanhamento próximo',
    text: 'Você não fica no escuro: acompanho seu caso de perto e mantenho você informado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
  },
]

export default function Experiencia() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section className="exp pad" ref={ref}>
      <div className="wrap exp-grid">
        <div className="exp-media">
          <motion.img
            src="/assets/experiencia.jpg"
            alt="Balança da justiça"
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="exp-text">
          <Reveal>
            <span className="eyebrow">Experiência que acolhe</span>
            <hr className="rule" />
            <h2 className="serif" style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 700, lineHeight: 1.1 }}>
              Técnica jurídica com{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>sensibilidade humana</em>
            </h2>
            <p style={{ color: '#D8D2C5', fontSize: 16, fontWeight: 300, marginTop: 18 }}>
              A combinação que define o meu trabalho: rigor no Direito e cuidado com a
              pessoa por trás de cada processo.
            </p>
          </Reveal>
          {features.map((f, i) => (
            <motion.div
              className="feature"
              key={f.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
            >
              <div className="fi">{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
