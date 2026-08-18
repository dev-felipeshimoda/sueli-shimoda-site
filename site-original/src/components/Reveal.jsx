import { motion } from 'framer-motion'

// Reveal on scroll — equivalente ao IntersectionObserver do site antigo,
// agora com o easing/spring do Framer Motion.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  x = 0,
  className,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
