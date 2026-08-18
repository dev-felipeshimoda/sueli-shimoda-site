import { motion } from 'framer-motion'

export default function AreaCard({ img, alt, icon, title, items, waMsg, delay = 0 }) {
  return (
    <motion.article
      className="area-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
    >
      <div className="img">
        <img src={img} alt={alt} />
      </div>
      <div className="body">
        <div className="ico">{icon}</div>
        <h3>{title}</h3>
        <ul>
          {items.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
        <a href={waMsg} target="_blank" rel="noopener" className="area-link">
          Falar sobre meu caso &rarr;
        </a>
      </div>
    </motion.article>
  )
}
