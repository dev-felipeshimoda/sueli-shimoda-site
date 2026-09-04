# Carrosséis | Sueli Shimoda Advocacia

Cada carrossel mora na própria subpasta, com texto, prompts de imagem, HTML, render e legenda.

## Regras fixas desta pasta

- **Antes de criar qualquer carrossel**, ler `guia-estrategia-posts.md`. Ele define os ganchos, a estrutura narrativa, a estratégia editorial e o checklist de conformidade.
- **Todo carrossel mora aqui**, em `clientes/sueli-shimoda/carrosseis/<pasta>/`.
- **Áreas do conteúdo:** só Direito de Família e Previdenciário.
- Cada carrossel tem os prompts de imagem numa subpasta `prompts img/`, com um prompt por slide,
  dizendo a qual slide pertence.
- As imagens são geradas no ChatGPT a partir desses prompts, nunca por gerador automático.
- Cores sempre ligadas ao branding da Sueli. Pode haver cor nova, desde que converse com a paleta.
- Copy: contradição ou curiosidade absurda na capa, conflito criado e resolvido ao longo do carrossel,
  frase direta que não exige interpretação, leve e verdadeira.

## Índice

| # | Pasta | Tema | Capa no feed | Status |
|---|---|---|---|---|
| 01 | `01-apresentacao/` | Minha história: meu divórcio criou a advogada que eu sou | Foto (capa fornecida) | pronto, PNGs renderizados. Versão anterior em `01-apresentacao/v1-institucional/` |
| 02 | `02-divorcio/` | O jeito mais caro de se divorciar é decidir tudo no impulso | Foto (capa fornecida) | pronto, 7 slides, PNGs renderizados. Versão anterior em `02-divorcio/v1-institucional/` |
| 03 | `03-previdenciario/` | Como a aposentadoria da minha mãe mudou o meu trabalho | Espresso | pronto, falta colar `img-papelada.png` e `img-textura-linho.png` |
| 04 | `04-pensao-7-sinais/` | 7 sinais de que chegou a hora de rever sua pensão | Foto sobre fundo escuro | slides 02 a 10 prontos, falta salvar a capa como `instagram/slide-01.png` |
| 04 | `04-pensao-alimenticia/` | Pensão atrasada não é falta de sorte, é direito negado | Rosé queimado | pronto, PNGs renderizados, falta colar `img-rotina-escola.png` |
| 05 | `05-revisao-pensao/` | 7 sinais de que chegou a hora de rever sua pensão (estilo viral, capa fornecida pronta) | Foto (capa fornecida) | pronto, PNGs renderizados |
| 07 | `07-revisao-pensao-editorial/` | 7 sinais para rever a pensão, versão editorial (mesmo conteúdo do 05) | Foto (capa fornecida) | pronto, PNGs renderizados, fundos internos em degradê de reserva |
| 09 | `09-guarda-compartilhada/` | Guarda compartilhada não é dividir o filho ao meio | Foto (capa editorial) | pronto, 7 slides, PNGs renderizados |
| 10 | `10-aposentadoria-mae-planejamento/` | O pedido de aposentadoria começa antes do botão | Foto da Sueli com função narrativa | pronto, 7 slides, PNGs renderizados |
| 11 | `11-pensao-maioridade/` | Pensão não acaba automaticamente aos 18 anos | Tipográfica, terracota | pronto, 7 slides, PNGs renderizados |
| 12 | `12-inss-atrasado/` | Pagar o INSS em atraso não garante o reconhecimento | Foto de documentos | pronto, 7 slides, PNGs renderizados |
| 13 | `13-divorcio-antes-partilha/` | O divórcio pode vir antes da partilha | Tipográfica, branco editorial | pronto, 7 slides, PNGs renderizados |

As capas alternam de propósito. Nenhuma capa nova deve repetir o fundo da capa anterior no feed.

O carrossel 05 foge da paleta oficial (terracota/espresso/rosé, Lora/Manrope): usa vermelho/preto/branco e a fonte Poppins, no estilo de carrosséis virais de referência que o Felipe anexou. É uma linha separada, não substitui o sistema visual institucional em `../marca.md`.

**Atenção:** o carrossel 04 roda em outro sistema visual, escuro e com acento vermelho, definido
em `04-pensao-7-sinais/filosofia-visual.md`. Ele não usa a paleta terracota nem Lora e Manrope.
São duas linguagens diferentes convivendo no mesmo perfil, o que foi uma escolha do Felipe.
Vale decidir em algum momento qual das duas vira o padrão do feed.

## O que tem em cada pasta

Na raiz de `carrosseis/` ficam os arquivos compartilhados: `_base.css`, `_editorial-referencias.css`,
`_render.js` e `package.json`. Os carrosséis 10 a 13 usam o sistema editorial inspirado nas referências anexadas.

```
texto.md             roteiro slide a slide
prompts-imagens.md   prompts em inglês pra gerar no GPT
carrossel.html       os 6 slides num arquivo só, CSS inline
render.js            exporta cada slide em PNG 1080x1350
imagens/             logo, foto e imagens geradas no GPT
instagram/           slide-01.png ... slide-06.png
legenda.md           legenda pra Instagram e Facebook
```

## Sistema visual

Fonte da verdade: `../identidade/paleta/PALETA-OFICIAL.md`, `../identidade/tipografia/TIPOGRAFIA-OFICIAL.md` e `../marca.md`.

**Cores.** Só as seis oficiais, nenhuma cor nova.

| Cor | Hex | Uso |
|---|---|---|
| Terracota profundo | `#603020` | Fundo dominante, capas, CTA |
| Espresso | `#241210` | Contraste, texto, fundo escuro |
| Rosé queimado | `#B68C76` | Blocos acolhedores |
| Taupe quente | `#AD9D8E` | Cards e fundos neutros |
| Branco editorial | `#F3F0EB` | Fundo claro e leitura |
| Champagne | `#B8A078` | Filetes e detalhes. Nunca fundo, nunca texto longo |

**Tipografia.** Lora 500/600 em título e assinatura. Manrope 400/500/600 em corpo, kicker e rodapé. Lora nunca em parágrafo.

**Assinatura de slide.** Logo no canto superior esquerdo, contador `01/06` no canto superior direito.

**Ritmo.** Dois slides seguidos nunca têm o mesmo fundo.

## Regras de conteúdo

- Máximo 25 palavras por slide. Uma ideia por slide. O texto longo vai na legenda.
- Sem emoji e sem travessão.
- Guardrails de publicidade jurídica (Código de Ética da OAB, Provimento 205/2021 do CFOAB, fiscalizados pelo TED):
  sem promessa ou insinuação de resultado, sem superlativo, sem "especialista" sem título, sem preço ou promoção,
  sem sensacionalismo, sem urgência artificial, sem captação mercantilista, sem caso de cliente identificável.
  Nome e número de inscrição na OAB na assinatura. Lista completa em `../briefing.md`.
- História pessoal só quando for verdadeira. As duas usadas aqui (divórcio e aposentadoria da mãe) são reais e vieram do briefing.

## Como renderizar

Instalar o Playwright uma vez, aqui na raiz de `carrosseis/`:

```bash
npm install
```

Depois, dentro da pasta do carrossel:

```bash
node render.js
```

Sai `instagram/slide-01.png` até `slide-06.png`, todos em 1080x1350.

## Pendências

- Número novo da Sueli e @ do Instagram ainda não confirmados. Os slides de CTA não usam nenhum dos dois, então a entrega roda sem eles.
