import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { waLink } from '../wa.js'
import { WhatsAppGlyph } from './icons.jsx'

export default function WhatsappFloat() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShow(y > window.innerHeight * 0.7)
  })

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="wa-float"
          aria-label="WhatsApp"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.1, backgroundColor: 'var(--navy-2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppGlyph />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
