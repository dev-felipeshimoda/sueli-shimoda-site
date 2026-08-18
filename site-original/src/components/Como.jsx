import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const steps = [
  {
    num: '01',
    title: 'Contato inicial',
    text: 'Você me chama no WhatsApp e conta, com tranquilidade, o que está acontecendo.',
    receive: 'Uma escuta sem compromisso',
  },
  {
    num: '02',
    title: 'Análise do caso',
    text: 'Avalio sua situação, esclareço suas dúvidas e explico os caminhos possíveis.',
    receive: 'Clareza sobre seus direitos',
  },
  {
    num: '03',
    title: 'Plano de ação',
    text: 'Definimos juntos a melhor estratégia, com linguagem clara e expectativas reais.',
    receive: 'Uma estratégia definida',
  },
  {
    num: '04',
    title: 'Acompanhamento',
    text: 'Conduzo o processo e mantenho você informado em cada passo até a resolução.',
    receive: 'Acompanhamento até o fim',
  },
]

export default function Como() {
  return (
    <section className="como pad" id="como">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Como funciona</span>
          <hr className="rule center" />
          <h2>
            Um caminho simples, do <em>primeiro contato à solução</em>
          </h2>
          <p>Sem complicação e sem surpresas. Você sabe exatamente o que esperar em cada etapa.</p>
        </Reveal>

        <div className="steps-flow">
          <motion.span
            className="steps-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map((s, i) => (
            <motion.div
              className="step-flow"
              key={s.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.12 }}
            >
              <motion.span
                className="dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: 'backOut', delay: 0.3 + i * 0.12 }}
              />
              <span className="s-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              <div className="s-receive">
                <span className="s-receive-label">Você recebe</span>
                <span className="s-receive-value">{s.receive}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
