import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Areas from './components/Areas.jsx'
import Quem from './components/Quem.jsx'
import Experiencia from './components/Experiencia.jsx'
import Como from './components/Como.jsx'
import Sobre from './components/Sobre.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsappFloat from './components/WhatsappFloat.jsx'

const trustItems = [
  { n: '+20', l: 'Anos de experiência na advocacia' },
  { n: '100%', l: 'Sigilo e atendimento personalizado' },
  { n: '+200', l: 'Famílias atendidas' },
  { n: 'SS', l: 'Sua parceira na busca por justiça e dignidade' },
]

const statsItems = [
  { n: '+20', l: 'Anos de experiência' },
  { n: '+200', l: 'Famílias atendidas' },
  { n: '100%', l: 'Sigilo e discrição' },
  { n: 'SS', l: 'Sua parceira na busca por justiça e dignidade' },
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <>
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'var(--gold)',
          zIndex: 200,
        }}
      />
      <Header />
      <Hero />
      <div className="trust-band trust-solo">
        <Marquee items={trustItems} duration={38} />
      </div>
      <Areas />
      <Quem />
      <Experiencia />
      <Como />
      <Sobre />
      <section className="stats-band">
        <Marquee items={statsItems} duration={32} />
      </section>
      <CTA />
      <Footer />
      <WhatsappFloat />
    </>
  )
}
