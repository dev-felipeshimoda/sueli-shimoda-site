import { motion } from 'framer-motion'

// Faixa deslizante infinita. Os itens são duplicados e o track corre de 0 a -50%.
export default function Marquee({ items, duration = 35 }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <motion.div
        style={{ display: 'flex', alignItems: 'center', width: 'max-content' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <div className="mq-item" key={i}>
            <b>{it.n}</b>
            <span>{it.l}</span>
            <span className="mq-dot" style={{ marginLeft: 24 }} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
