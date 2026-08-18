import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const cards = [
  {
    title: 'Separação ou divórcio',
    text: 'Quem precisa encerrar um casamento com respeito, segurança e sem desgaste desnecessário.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.35-9-8.5C1.5 9 3.5 5.5 7 5.5c2 0 3.2 1.2 5 3 1.8-1.8 3-3 5-3 3.5 0 5.5 3.5 4 7-2 4.15-9 8.5-9 8.5z" />
        <path d="M12 6.5l-1.7 4 2.7 1.6-1.6 4" />
      </svg>
    ),
  },
  {
    title: 'Disputa de guarda e pensão',
    text: 'Pais e mães buscando proteger os filhos e garantir o que é justo para a família.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6.5" r="2.5" />
        <path d="M3.5 21v-4a4.5 4.5 0 019 0v4" />
        <circle cx="17.5" cy="10" r="2" />
        <path d="M14 21v-3a3.5 3.5 0 017 0v3" />
      </svg>
    ),
  },
  {
    title: 'Perto da aposentadoria',
    text: 'Trabalhadores que querem se aposentar pela melhor regra, sem perder direitos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h10M7 21h10" />
        <path d="M9 3v3.2c0 1.5 3 3 3 5.6 0-2.6 3-4.1 3-5.6V3" />
        <path d="M9 21v-3.2c0-1.5 3-3 3-5.6 0 2.6 3 4.1 3 5.6V21" />
      </svg>
    ),
  },
  {
    title: 'Afastados por doença',
    text: 'Quem precisa de auxílio por incapacidade ou aposentadoria e teve o benefício negado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l2-5 3.5 10L14 9l1.5 3H22" />
      </svg>
    ),
  },
  {
    title: 'Famílias que dependem do INSS',
    text: 'Idosos e pessoas com deficiência em busca do BPC/LOAS ou pensão por morte.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5v2" />
        <path d="M3.5 12a8.5 8.5 0 0117 0z" />
        <path d="M12 12v7a2.5 2.5 0 005 0" />
      </svg>
    ),
  },
  {
    title: 'União estável',
    text: 'Casais que querem reconhecer ou dissolver a união com segurança jurídica.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="13" r="5.5" />
        <circle cx="15" cy="13" r="5.5" />
      </svg>
    ),
  },
]

export default function Quem() {
  return (
    <section className="quem pad" id="quem">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Para quem é</span>
          <hr className="rule center" />
          <h2>
            Se você está passando por <em>um desses momentos</em>
          </h2>
        </Reveal>
        <div className="quem-grid">
          {cards.map((c, i) => (
            <motion.div
              className="quem-card"
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#1C2530',
                borderColor: 'rgba(198,161,91,0.5)',
                boxShadow: '0 18px 40px rgba(0,0,0,0.45)',
                zIndex: 2,
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              <div className="ico">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
