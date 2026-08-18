import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { waLink } from '../wa.js'

const Logo = ({ className = '' }) => (
  <a href="#inicio" className={`logo ${className}`}>
    <div className="mono">SS</div>
    <div className="txt">
      <b>SUELI SHIMODA</b>
      <span>Advocacia</span>
    </div>
  </a>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <motion.header
        className={scrolled ? 'scrolled' : ''}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wrap nav">
          <Logo />
          <nav className={`menu ${open ? 'open' : ''}`}>
            <Logo className="menu-logo" />
            <a href="#inicio" onClick={close}>Início</a>
            <a href="#areas" onClick={close}>Áreas</a>
            <a href="#como" onClick={close}>Como atendo</a>
            <a href="#sobre" onClick={close}>Sobre</a>
            <a href="#contato" onClick={close}>Contato</a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-gold menu-cta" onClick={close}>
              Falar no WhatsApp
            </a>
          </nav>
          <div className="nav-cta">
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-gold">
              Falar no WhatsApp
            </a>
            <div
              className={`burger ${open ? 'is-open' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                setOpen((v) => !v)
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </motion.header>
      <div className={`menu-overlay ${open ? 'show' : ''}`} onClick={close}></div>
    </>
  )
}
