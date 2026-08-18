import Reveal from './Reveal.jsx'
import AreaCard from './AreaCard.jsx'
import { HeartIcon, ShieldCheckIcon } from './icons.jsx'
import { waLink } from '../wa.js'

export default function Areas() {
  return (
    <section className="pad" id="areas" style={{ background: 'var(--navy)' }}>
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Áreas de atuação</span>
          <hr className="rule center" />
          <h2>
            Soluções jurídicas para <em>momentos que importam</em>
          </h2>
          <p>
            Atuação focada e aprofundada em duas áreas, para oferecer um atendimento
            realmente especializado em cada caso.
          </p>
        </Reveal>
        <div className="areas-grid">
          <AreaCard
            img="/assets/familia.jpg"
            alt="Direito de Família"
            icon={<HeartIcon />}
            title="Direito de Família"
            items={[
              'Divórcio judicial',
              'Divórcio extrajudicial',
              'Guarda dos filhos',
              'Pensão alimentícia',
              'Partilha de bens',
              'União estável',
            ]}
            waMsg={waLink('Olá, Sueli! Vim pelo seu site e gostaria de conversar sobre um caso de Direito de Família.')}
          />
          <AreaCard
            img="/assets/previdenciario.jpg"
            alt="Direito Previdenciário"
            icon={<ShieldCheckIcon />}
            title="Direito Previdenciário"
            delay={0.1}
            items={[
              'Aposentadorias',
              'Auxílio por incapacidade',
              'BPC / LOAS',
              'Pensão por morte',
              'Revisão de benefícios',
              'Planejamento',
            ]}
            waMsg={waLink('Olá, Sueli! Vim pelo seu site e gostaria de conversar sobre um caso de Direito Previdenciário (INSS).')}
          />
        </div>
      </div>
    </section>
  )
}
