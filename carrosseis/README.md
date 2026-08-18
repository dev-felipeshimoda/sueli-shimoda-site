# Carrosséis | Sueli Shimoda Advocacia

Cada carrossel mora na própria subpasta, com texto, prompts de imagem, HTML, render e legenda.

## Índice

| # | Pasta | Tema | Capa no feed | Status |
|---|---|---|---|---|
| 01 | `01-apresentacao/` | Quem é a Sueli, abre o perfil | Foto full bleed | pronto, PNGs renderizados |
| 02 | `02-divorcio/` | A dor que me fez escolher lutar por você | Branco editorial | pronto, falta colar `img-janela.png` e `img-textura-papel.png` |
| 03 | `03-previdenciario/` | Como a aposentadoria da minha mãe mudou o meu trabalho | Espresso | pronto, falta colar `img-papelada.png` e `img-textura-linho.png` |

As capas alternam de propósito. Nenhuma capa nova deve repetir o fundo da capa anterior no feed.

## O que tem em cada pasta

Na raiz de `carrosseis/` ficam os três arquivos compartilhados: `_base.css` (o sistema visual),
`_render.js` (a lógica de screenshot) e o `package.json`. Mexer no `_base.css` muda os três
carrosséis de uma vez, que é justamente a ideia.

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
- Guardrail OAB: sem promessa de resultado, sem sensacionalismo, sem captação mercantilista.
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
