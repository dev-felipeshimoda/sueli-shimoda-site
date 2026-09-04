import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, MessageCircle, Plus, ShieldCheck, X } from 'lucide-react'
import { waLink } from './wa.js'

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

function useSiteAnimations(rootRef) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    let acelerarFaixa = null
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

      const marquee = gsap.to('.velocity-track', { xPercent: -50, duration: 26, ease: 'none', repeat: -1 })
      let ultimoY = window.scrollY
      let ultimoTempo = performance.now()

      acelerarFaixa = () => {
        const agora = performance.now()
        const intervalo = Math.max(16, agora - ultimoTempo)
        const velocidade = Math.abs(window.scrollY - ultimoY) / intervalo
        ultimoY = window.scrollY
        ultimoTempo = agora
        gsap.to(marquee, { timeScale: 1 + Math.min(velocidade * 1.4, 3.2), duration: 0.16, overwrite: true })
        gsap.to(marquee, { timeScale: 1, duration: 0.8, delay: 0.18, overwrite: 'auto' })
      }

      window.addEventListener('scroll', acelerarFaixa, { passive: true })
    }, rootRef)

    return () => {
      if (acelerarFaixa) window.removeEventListener('scroll', acelerarFaixa)
      context.revert()
    }
  }, [rootRef])
}

// A entrada dos blocos acompanha a rolagem direto, sem depender de posições
// medidas antes da hora. Se o JS não rodar, o conteúdo aparece sem animação.
function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    document.documentElement.setAttribute('data-app-pronto', '')
    let pendentes = Array.from(root.querySelectorAll('[data-reveal], [data-whisper], [data-pricing-card], .guidance-card'))

    const revelar = () => {
      const limite = window.innerHeight * 0.94
      pendentes = pendentes.filter((alvo) => {
        if (alvo.getBoundingClientRect().top > limite) return true
        alvo.classList.add('is-in')
        return false
      })
      if (!pendentes.length) desligar()
    }

    const desligar = () => {
      window.removeEventListener('scroll', revelar)
      window.removeEventListener('resize', revelar)
    }

    revelar()
    window.addEventListener('scroll', revelar, { passive: true })
    window.addEventListener('resize', revelar)
    return desligar
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
          <a href="#orientacao" onClick={closeMenu}>Orientação</a>
          <a href="#atuacao" onClick={closeMenu}>Atuação</a>
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
          {areas.map((area, index) => (
            <article className="area-card" data-pricing-card style={{ '--reveal-index': index }} key={area.title}>
              <div className="area-image">
                <img src={area.image} alt={area.alt} width="1300" height="958" decoding="async" />
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
          {guidance.map((item, index) => (
            <article className="guidance-card" style={{ '--reveal-index': index }} key={item.number}>
              <span className="guidance-card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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
    const update = () => {
      const root = timelineRef.current
      if (!root) return
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
          <p data-reveal>Minha trajetória no Direito, especialmente no Direito de Família e Sucessões, também nasceu de uma experiência pessoal: o divórcio.</p>
          <p data-reveal>Vivi de perto as dúvidas, os desafios e as emoções que envolvem o fim de uma relação. E foi essa experiência que me mostrou que, embora o divórcio seja um momento doloroso, ele também pode ser o início de um novo caminho.</p>
          <p data-reveal>Hoje, uso minha experiência pessoal e profissional para ajudar pessoas a atravessarem esse momento com segurança, respeito e humanidade.</p>
          <p data-reveal>Sei que um divórcio não é um momento tranquilo. Existem sentimentos, inseguranças, questões financeiras, filhos, patrimônio e decisões que precisam ser tomadas quando, muitas vezes, tudo parece estar fora do lugar.</p>
          <p data-reveal>Porque o fim de uma história não precisa significar o fim de você. Pode ser o começo de uma nova história.</p>
          <div className="about-life" data-reveal>
            <p className="eyebrow">O que me trouxe até aqui</p>
            <p className="about-life-lead">O divórcio não foi a única vez que vivi de perto o que hoje atendo.</p>
            {experiences.map((experience) => (
              <article className="about-life-card" key={experience.title}>
                <div className="about-life-card-head">
                  <span className="about-life-tag">{experience.tag}</span>
                  <h3>{experience.title}</h3>
                </div>
                <p>{experience.text}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="about-image-frame" data-reveal>
          <img src="/assets/sueli-escritorio-cortada.jpg" alt="Sueli Shimoda, advogada, sentada à mesa do escritório" width="1147" height="938" decoding="async" />
          <figcaption>Sueli Shimoda | Advogada</figcaption>
        </figure>
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
            <a href="#orientacao">Quando buscar orientação</a>
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
            <a href="https://www.instagram.com/shimoda_advogada/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:contato@shimoda.adv.br">E-mail</a>
            <span>São Paulo, zona oeste</span>
            <span>Atendimento presencial ou online, com hora marcada</span>
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
  useReveal(rootRef)

  return (
    <div className="app" ref={rootRef}>
      <ScrollProgress />
      <Header />
      <main className="site-content">
        <Hero />
        <VelocityMarquee />
        <Guidance />
        <Areas />
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
