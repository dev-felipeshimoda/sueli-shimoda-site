import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, MessageCircle, Pin, Plus, ShieldCheck, X } from 'lucide-react'
import { waLink } from './wa.js'

gsap.registerPlugin(ScrollTrigger)

const areas = [
  {
    number: '01',
    title: 'Direito de Família e Sucessões',
    description: 'Orientação em divórcio, guarda, alimentos, partilha, inventário e testamento, decisões que atravessam relações, afetos e patrimônio.',
    image: '/assets/familia.jpg',
    alt: 'Mãos de uma família reunidas sobre uma mesa',
    tag: 'Família e Sucessões',
  },
  {
    number: '02',
    title: 'Direito Previdenciário',
    description: 'Análise cuidadosa de benefícios, aposentadorias, revisões e planejamento para proteger o presente e o futuro.',
    image: '/assets/previdenciario.jpg',
    alt: 'Pessoa madura organizando documentos previdenciários',
    tag: 'Previdenciário',
  },
]

const guidance = [
  { number: '01', title: 'Não sei por onde começar', text: 'Informações desencontradas e opiniões diferentes tornam difícil entender qual atitude faz sentido agora.' },
  { number: '02', title: 'Tenho medo de decidir errado', text: 'Assinar, aceitar ou recusar uma proposta sem compreender os efeitos pode aumentar a insegurança.' },
  { number: '03', title: 'Prazos e documentos me preocupam', text: 'A dúvida sobre o que reunir e quando agir traz o receio de perder tempo ou deixar algo importante passar.' },
  { number: '04', title: 'Quero proteger quem depende de mim', text: 'Questões familiares, sucessórias ou previdenciárias podem afetar pessoas, renda e planos para o futuro.' },
]

const experiences = [
  {
    tag: 'Família e Sucessões',
    title: 'Passei por um divórcio',
    text: 'Sei o que é reorganizar a vida inteira enquanto tudo parece fora do lugar. Por isso escuto a sua história antes de falar em processo.',
  },
  {
    tag: 'Previdenciário',
    title: 'Acompanhei a aposentadoria da minha mãe',
    text: 'Vi de perto como a burocracia consegue cansar uma família inteira. Por isso explico cada etapa em linguagem simples, sem termos que afastam.',
  },
]

const principles = [
  { title: 'Escuta sem julgamento', text: 'Os fatos e as preocupações são recebidos com respeito, inclusive quando o tema é sensível.' },
  { title: 'Comunicação honesta', text: 'Limites, riscos e expectativas são apresentados sem criar promessas que o Direito não permite.' },
  { title: 'Critério técnico', text: 'Cada recomendação considera a legislação, os documentos disponíveis e as consequências práticas.' },
]

const processPanels = [
  {
    number: '01',
    label: 'Primeiro contato',
    title: 'Você conta a sua situação',
    intro: 'A conversa começa pelo que aconteceu e pelo que mais preocupa você neste momento. Não é preciso saber termos jurídicos nem chegar com tudo organizado, basta contar a história do seu jeito.',
    image: '/assets/processo-01-escuta.png',
    alt: 'Conversa acolhedora entre cliente e advogada',
    tone: 'espresso',
    points: [
      ['Espaço para explicar', 'Você apresenta os fatos no seu ritmo, sem pressa e sem precisar resumir o que ainda dói.'],
      ['Primeiras dúvidas', 'As questões mais urgentes entram em foco, sobretudo as que envolvem prazo, dinheiro ou convivência.'],
      ['Sigilo desde o início', 'Tudo o que você contar é tratado com discrição, inclusive antes de existir qualquer contratação.'],
    ],
  },
  {
    number: '02',
    label: 'Leitura do caso',
    title: 'Eu analiso o contexto',
    intro: 'Documentos, histórico e particularidades são observados antes de qualquer orientação. Duas situações parecidas podem seguir caminhos diferentes por causa de um detalhe que só aparece na leitura atenta.',
    image: '/assets/processo-02-analise.png',
    alt: 'Advogada analisando documentos com atenção',
    tone: 'terracotta',
    points: [
      ['Documentos e histórico', 'Contratos, comprovantes, conversas e datas são organizados para mostrar o que sustenta o seu caso.'],
      ['Urgências identificadas', 'Prazos e riscos recebem atenção imediata, porque algumas providências perdem força se ficarem para depois.'],
      ['Contexto considerado', 'Nenhuma história é tratada como caso genérico, já que rotina, vínculos e patrimônio mudam o caminho possível.'],
    ],
  },
  {
    number: '03',
    label: 'Orientação',
    title: 'Você recebe um plano de ação',
    intro: 'As alternativas são comparadas para transformar a análise em providências possíveis e bem definidas. Você entende o que pode ser feito, o que não pode e o que cada escolha costuma custar em tempo e em desgaste.',
    image: '/assets/processo-03-caminhos.png',
    alt: 'Advogada explicando possibilidades jurídicas em uma reunião',
    tone: 'taupe',
    points: [
      ['Cenários comparados', 'Acordo, medida judicial ou espera, cada caminho aparece com as vantagens e os limites reais.'],
      ['Prioridades organizadas', 'O que precisa acontecer primeiro fica definido, para você não gastar energia com o que pode esperar.'],
      ['Providências indicadas', 'Você termina a conversa sabendo o próximo passo, quais documentos reunir e o que evitar fazer agora.'],
    ],
  },
  {
    number: '04',
    label: 'Acompanhamento',
    title: 'As providências são acompanhadas',
    intro: 'Se houver continuidade, o andamento é conduzido com controle de prazos e atualização dos fatos relevantes. Você não precisa ficar cobrando notícias para saber em que ponto o seu caso está.',
    image: '/assets/processo-04-acompanhamento.png',
    alt: 'Pasta de documentos sendo entregue durante acompanhamento jurídico',
    tone: 'rose',
    points: [
      ['Prazos monitorados', 'As datas importantes ficam sob controle, com as providências preparadas antes do vencimento.'],
      ['Movimentações comunicadas', 'As novidades que mudam alguma coisa chegam até você em linguagem simples, sem despejar termos técnicos.'],
      ['Estratégia revisada', 'Se o cenário mudar, a rota é ajustada e você entende o motivo antes de qualquer decisão nova.'],
    ],
  },
]

const faqs = [
  {
    question: 'Como funciona o primeiro atendimento?',
    answer: 'O primeiro contato serve para você apresentar a situação e as dúvidas principais. A partir dessa conversa, Sueli explica quais informações ou documentos serão necessários para uma análise mais precisa.',
  },
  {
    question: 'Preciso reunir todos os documentos antes de conversar?',
    answer: 'Não. Você pode fazer o primeiro contato mesmo sem estar com tudo organizado. Durante a orientação, será indicado o que realmente importa para o seu caso.',
  },
  {
    question: 'O atendimento é sigiloso?',
    answer: 'Sim. As informações compartilhadas são tratadas com confidencialidade, respeito e observância do sigilo profissional.',
  },
  {
    question: 'Quais áreas são atendidas?',
    answer: 'A atuação é concentrada em duas frentes, Direito de Família e Sucessões e Direito Previdenciário, sempre com análise individual da situação apresentada.',
  },
  {
    question: 'Todos os casos seguem o mesmo caminho?',
    answer: 'Não. Pessoas, documentos, prazos e objetivos mudam de um caso para outro. Por isso, a orientação é construída somente depois de compreender o contexto.',
  },
]

const marqueeItems = ['Família', 'Sucessões', 'Previdenciário', 'Escuta atenta', 'Orientação clara', 'Atendimento humano']

// A rolagem lateral do "Como funciona" é só de desktop com mouse. Tablet e celular usam a timeline vertical.
const DESKTOP_PROCESS_QUERY = '(min-width: 1181px) and (pointer: fine)'
const TIMELINE_PROCESS_QUERY = 'not all and (min-width: 1181px) and (pointer: fine)'

function useSiteAnimations(rootRef) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const context = gsap.context(() => {
      gsap.fromTo(
        '.hero-word',
        { yPercent: 115, opacity: 0, rotate: 2 },
        { yPercent: 0, opacity: 1, rotate: 0, duration: 0.85, stagger: 0.08, ease: 'power4.out', delay: 0.08 },
      )

      gsap.fromTo(
        '.hero-intro',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power3.out', delay: 0.45 },
      )

      gsap.fromTo(
        '.hero-photo-frame',
        { clipPath: 'inset(0 100% 0 0)', scale: 1.04 },
        { clipPath: 'inset(0 0% 0 0)', scale: 1, duration: 1, ease: 'power4.inOut', delay: 0.1 },
      )

      gsap.utils.toArray('[data-whisper]').forEach((element) => {
        const line = element.querySelector('.whisper-line') || element
        gsap.fromTo(
          line,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.86,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })

      gsap.fromTo(
        '[data-pricing-card]',
        { y: 58, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.areas-grid', start: 'top 82%', once: true },
        },
      )

      gsap.fromTo(
        '.guidance-card',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.guidance-grid', start: 'top 84%', once: true },
        },
      )

      const marquee = gsap.to('.velocity-track', { xPercent: -50, duration: 26, ease: 'none', repeat: -1 })
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate(self) {
          const speed = 1 + Math.min(Math.abs(self.getVelocity()) / 650, 3.2)
          gsap.to(marquee, { timeScale: speed, duration: 0.16, overwrite: true })
          gsap.to(marquee, { timeScale: 1, duration: 0.8, delay: 0.18, overwrite: 'auto' })
        },
      })

      const media = gsap.matchMedia()
      media.add(DESKTOP_PROCESS_QUERY, () => {
        const section = document.querySelector('.process-section')
        const viewport = document.querySelector('.process-viewport')
        const track = document.querySelector('.process-track')
        if (!section || !viewport || !track) return undefined

        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth)
        const holdDistance = () => Math.round(viewport.clientHeight * 0.65)
        const progressCurrent = document.querySelector('.process-progress-current')
        const sizeSection = () => {
          section.style.height = `${viewport.clientHeight + distance() + holdDistance() * 2}px`
        }
        sizeSection()

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${holdDistance()} top`,
            end: () => `+=${distance()}`,
            scrub: 0.65,
            invalidateOnRefresh: true,
            onUpdate(self) {
              if (progressCurrent) {
                const step = Math.min(processPanels.length, Math.round(self.progress * (processPanels.length - 1)) + 1)
                progressCurrent.textContent = String(step).padStart(2, '0')
              }
            },
          },
        })

        window.addEventListener('resize', sizeSection)
        return () => {
          window.removeEventListener('resize', sizeSection)
          section.style.height = ''
          tween.kill()
          gsap.set(track, { clearProps: 'transform' })
        }
      })
    }, rootRef)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      context.revert()
    }
  }, [rootRef])
}

function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return undefined

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 8 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      bar.style.transform = `scaleX(${progress})`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // a altura da página muda depois do load (imagens, seção do processo, FAQ aberta)
    const observer = new ResizeObserver(update)
    observer.observe(document.body)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [])

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />
}

function WhisperText({ as: Tag = 'h2', className = '', children }) {
  return (
    <Tag className={className} data-whisper>
      <span className="whisper-line">{children}</span>
    </Tag>
  )
}

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Sueli Shimoda Advocacia, início">
      <img src="/assets/monograma-claro.png" alt="" aria-hidden="true" />
      <span className="brand-name">
        <strong>Sueli Shimoda</strong>
        <small>Advocacia</small>
      </span>
    </a>
  )
}

function OriginButton({ href, children, className = '', external = false }) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}
  return (
    <a className={`origin-button ${className}`} href={href} {...externalProps}>
      <span className="origin-button-fill" aria-hidden="true" />
      <span className="origin-button-label">{children}</span>
      <ArrowRight className="cta-arrow" size={18} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <a href="#atuacao" onClick={closeMenu}>Atuação</a>
          <a href="#orientacao" onClick={closeMenu}>Orientação</a>
          <a href="#atendimento" onClick={closeMenu}>Como funciona</a>
          <a href="#sobre" onClick={closeMenu}>Sueli Shimoda</a>
          <a href="#faq" onClick={closeMenu}>Dúvidas</a>
          <a className="mobile-nav-contact" href={waLink()} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Conte seu caso <ArrowRight size={18} aria-hidden="true" />
          </a>
        </nav>
        <OriginButton href={waLink()} external className="header-cta">Conte seu caso</OriginButton>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-visual" aria-label="Ambiente de trabalho jurídico">
        <div className="hero-photo-frame">
          <img src="/assets/hero-advocacia.png" alt="Mesa de advocacia com documentos e livros em ambiente sóbrio" />
        </div>
        <p className="hero-caption">Escuta, estratégia e presença em cada etapa.</p>
      </div>
      <div className="hero-copy-fade" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">Direito de Família, Sucessões e Previdenciário</p>
          <h1 className="hero-title" aria-label="Orientação jurídica com escuta e critério técnico">
            <span className="hero-line"><span className="hero-word">Orientação jurídica</span></span>{' '}
            <span className="hero-line"><span className="hero-word"><em>com escuta</em></span></span>{' '}
            <span className="hero-line"><span className="hero-word">e critério técnico</span></span>
          </h1>
          <p className="hero-lead hero-intro">Análise jurídica para organizar o caso, avaliar possibilidades e definir o próximo passo com segurança.</p>
          <div className="hero-actions hero-intro">
            <OriginButton href={waLink()} external>Conte seu caso</OriginButton>
            <a className="text-link" href="#atuacao">
              Conheça minha atuação
              <ArrowDown className="floating-arrow" size={18} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-proof hero-intro">
            <ShieldCheck size={19} strokeWidth={1.6} aria-hidden="true" />
            <span>Atendimento confidencial e individualizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function VelocityMarquee() {
  const repeated = [...marqueeItems, ...marqueeItems]
  return (
    <section className="velocity-marquee" aria-label="Áreas e valores do atendimento">
      <div className="velocity-track">
        {repeated.map((item, index) => (
          <span className="velocity-item" key={`${item}-${index}`} aria-hidden={index >= marqueeItems.length ? 'true' : undefined}>
            {item}<span className="velocity-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section className="section areas-section" id="atuacao">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
            <WhisperText>Atuação técnica em duas frentes essenciais.</WhisperText>
          </div>
          <p data-reveal>Demandas familiares, sucessórias e previdenciárias recebem leitura própria, de acordo com os fatos e os documentos envolvidos.</p>
        </div>
        <div className="areas-grid">
          {areas.map((area) => (
            <article className="area-card" data-pricing-card key={area.title}>
              <div className="area-image">
                <img src={area.image} alt={area.alt} loading="lazy" />
                <span>{area.tag}</span>
              </div>
              <div className="area-content">
                <div className="card-index">{area.number}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href={waLink(`Olá, Sueli. Gostaria de conversar sobre ${area.title}.`)} target="_blank" rel="noreferrer">
                  Conversar sobre esta área
                  <ArrowRight className="cta-arrow" size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Guidance() {
  return (
    <section className="section guidance-section" id="orientacao">
      <div className="shell guidance-layout">
        <div className="guidance-heading">
          <p className="eyebrow">Quando buscar orientação</p>
          <WhisperText>O que está tirando a sua tranquilidade?</WhisperText>
          <p data-reveal>Dúvidas, receio de perder um direito ou dificuldade para decidir podem ser sinais de que é hora de compreender melhor o cenário.</p>
        </div>
        <div className="guidance-grid">
          <div className="guidance-track">
            {guidance.map((item, index) => (
              <article className="guidance-card" style={{ '--stack-index': index }} key={item.number}>
                <Pin className="guidance-pin" size={25} strokeWidth={2.2} aria-hidden="true" />
                <div className="guidance-card-face">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="section principles-section">
      <div className="shell principles-layout">
        <div>
          <p className="eyebrow">O que orienta meu trabalho</p>
          <WhisperText>Princípios que não mudam de um caso para outro.</WhisperText>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <article data-reveal key={principle.title}>
              <span>0{index + 1}</span>
              <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessTimeline() {
  const timelineRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timelineMode = window.matchMedia(TIMELINE_PROCESS_QUERY)

    const update = () => {
      const root = timelineRef.current
      if (!root || !timelineMode.matches) return
      const items = Array.from(root.querySelectorAll('.process-timeline-item'))
      if (!items.length) return

      const line = window.innerHeight * 0.56
      let current = 0
      items.forEach((item, index) => {
        if (item.getBoundingClientRect().top <= line) current = index
      })
      setActiveIndex(current)

      const list = root.querySelector('.process-timeline-items')
      const beam = root.querySelector('.process-timeline-beam')
      if (list && beam) {
        const rect = list.getBoundingClientRect()
        const progress = (line - rect.top) / Math.max(1, rect.height - 70)
        beam.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`
      }
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="process-timeline" ref={timelineRef}>
      <div className="process-timeline-bg" aria-hidden="true">
        {processPanels.map((panel, index) => (
          <div
            className={`process-timeline-shot${index === activeIndex ? ' is-active' : ''}`}
            key={panel.number}
            style={{ backgroundImage: `url(${panel.image})` }}
          />
        ))}
        <span className="process-timeline-veil" />
      </div>
      <div className="process-timeline-list">
        <div className="process-timeline-head">
          <p className="eyebrow">Como funciona</p>
          <span className="process-timeline-counter" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')}<i />04
          </span>
        </div>
        <div className="process-timeline-items">
          <span className="process-timeline-rail" aria-hidden="true"><i className="process-timeline-beam" /></span>
          {processPanels.map((panel, index) => (
            <article className={`process-timeline-item${index === activeIndex ? ' is-active' : ''}`} key={panel.number}>
              <span className="process-timeline-marker" aria-hidden="true">{panel.number}</span>
              <div className="process-timeline-card">
                <span className="process-pill">{panel.number} | {panel.label}</span>
                <h3>{panel.title}</h3>
                <p className="process-intro">{panel.intro}</p>
                <div className="process-points">
                  {panel.points.map(([title, text]) => (
                    <div className="process-point" key={title}>
                      <Check size={18} strokeWidth={1.8} aria-hidden="true" />
                      <div><h4>{title}</h4><p>{text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function Process() {
  return (
    <section className="process-section" id="atendimento">
      <ProcessTimeline />
      <div className="process-sticky">
        <div className="process-topbar">
          <p className="eyebrow">Como funciona</p>
          <div className="process-progress" aria-hidden="true"><span className="process-progress-current">01</span><i /><span>04</span></div>
          <p className="process-swipe-hint">Deslize para ver as próximas etapas <ArrowRight size={16} aria-hidden="true" /></p>
        </div>
        <div className="process-viewport">
          <div className="process-track">
            {processPanels.map((panel) => (
              <article className={`process-panel process-tone-${panel.tone}`} key={panel.number}>
                <div className="shell process-panel-inner">
                  <div className="process-copy">
                    <span className="process-pill">{panel.number} | {panel.label}</span>
                    <h3>{panel.title}</h3>
                    <p className="process-intro">{panel.intro}</p>
                    <div className="process-points">
                      {panel.points.map(([title, text]) => (
                        <div className="process-point" key={title}>
                          <Check size={18} strokeWidth={1.8} aria-hidden="true" />
                          <div><h4>{title}</h4><p>{text}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="process-image"><img src={panel.image} alt={panel.alt} loading="lazy" /></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="shell about-layout">
        <div className="about-copy">
          <p className="eyebrow">Sobre</p>
          <WhisperText>Sueli Shimoda</WhisperText>
          <p data-reveal>Minha trajetória é dedicada ao Direito de Família e Sucessões e ao Direito Previdenciário, com atenção às particularidades que tornam cada situação única.</p>
          <p data-reveal>O trabalho combina estudo contínuo, leitura minuciosa dos documentos e comunicação direta, sem perder de vista os efeitos concretos de cada escolha.</p>
          <div className="about-highlights" data-reveal>
            <div><strong>Atuação concentrada</strong><span>Família, Sucessões e Previdenciário.</span></div>
            <div><strong>Leitura minuciosa</strong><span>Fatos e documentos analisados em conjunto.</span></div>
          </div>
        </div>
        <figure className="about-image-frame" data-reveal>
          <img src="/assets/sueli-fundo-branco-idv.jpg" alt="Sueli Shimoda, advogada" loading="lazy" />
          <figcaption>Sueli Shimoda | Advogada</figcaption>
        </figure>
      </div>
      <div className="shell about-life">
        <p className="eyebrow">O que me trouxe até aqui</p>
        <WhisperText as="p" className="about-life-lead">Antes de atender essas causas, eu vivi duas delas.</WhisperText>
        <div className="about-life-grid">
          {experiences.map((experience) => (
            <article className="about-life-card" data-reveal key={experience.title}>
              <span className="about-life-tag">{experience.tag}</span>
              <h3>{experience.title}</h3>
              <p>{experience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-layout">
        <div className="faq-heading">
          <p className="eyebrow">Dúvidas frequentes</p>
          <WhisperText>Antes de conversar, algumas respostas podem ajudar.</WhisperText>
          <p data-reveal>Se a sua dúvida não estiver aqui, você pode apresentar o seu caso diretamente.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={faq.question}>
                <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon"><Plus size={22} aria-hidden="true" /></span>
                </button>
                <div className="faq-answer" aria-hidden={!isOpen}><div><p>{faq.answer}</p></div></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="shell contact-inner">
        <div className="contact-status">
          <span aria-hidden="true" />
          <p className="eyebrow">Vamos conversar</p>
        </div>
        <WhisperText>
          <span>Seu caso merece</span>{' '}
          <span>uma conversa clara.</span>
        </WhisperText>
        <a className="contact-action" href={waLink()} target="_blank" rel="noreferrer">
          <span className="contact-action-circle"><ArrowUpRight size={31} strokeWidth={1.6} aria-hidden="true" /></span>
          <span className="contact-action-label">Chamar no WhatsApp</span>
        </a>
        <p data-reveal>Apresente a situação e receba uma indicação objetiva sobre como iniciar a análise jurídica.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-lead">
          <Brand />
          <p>Advocacia próxima para decisões que pedem clareza, cuidado e responsabilidade.</p>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Navegação</h3>
            <a href="#atuacao">Áreas de atuação</a>
            <a href="#atendimento">Como funciona</a>
            <a href="#sobre">Sueli Shimoda</a>
            <a href="#faq">Dúvidas frequentes</a>
          </div>
          <div>
            <h3>Atuação</h3>
            <a href="#atuacao">Família e Sucessões</a>
            <a href="#atuacao">Previdenciário</a>
          </div>
          <div>
            <h3>Contato</h3>
            <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:contato@suelishimoda.adv.br">E-mail</a>
            <span>Atendimento com hora marcada</span>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">Sueli Shimoda</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sueli Shimoda Advocacia</span>
          <span>Conteúdo informativo. Cada situação exige análise individual.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const rootRef = useRef(null)
  useSiteAnimations(rootRef)

  return (
    <div className="app" ref={rootRef}>
      <ScrollProgress />
      <Header />
      <main className="site-content">
        <Hero />
        <VelocityMarquee />
        <Areas />
        <Guidance />
        <Principles />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="whatsapp-float" href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar com Sueli pelo WhatsApp">
        <MessageCircle size={23} strokeWidth={1.8} />
      </a>
    </div>
  )
}
