import { waLink } from '../wa.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <a href="#inicio" className="logo">
              <div className="mono">SS</div>
              <div className="txt">
                <b>SUELI SHIMODA</b>
                <span>Advocacia</span>
              </div>
            </a>
            <p>
              Advocacia humanizada em Direito de Família e Previdenciário. Mais que advogada,
              sua parceira na busca por justiça e dignidade.
            </p>
          </div>
          <div className="foot-col">
            <h5>Navegação</h5>
            <a href="#sobre">Sobre</a>
            <a href="#areas">Áreas de atuação</a>
            <a href="#como">Como atendo</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="foot-col">
            <h5>Contato</h5>
            <a href={waLink()} target="_blank" rel="noopener">WhatsApp: 9 1919-0999</a>
            <p>Atendimento com hora marcada</p>
            <p>Sigilo e discrição garantidos</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 Sueli Shimoda &middot; Advocacia. Todos os direitos reservados.</span>
          <span>OAB &middot; Direito de Família &middot; Previdenciário</span>
        </div>
      </div>
    </footer>
  )
}
