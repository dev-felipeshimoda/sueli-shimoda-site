# Site V3 | Sueli Shimoda

Landing page em React com animações de entrada e scroll em GSAP.

## Abrir por duplo clique

Rode `npm run single` para gerar o `standalone.html` e abra `index.html`. Quando o arquivo é aberto diretamente no navegador, ele encaminha automaticamente para `standalone.html`, que contém os estilos, scripts e imagens incorporados.

## Rodar localmente

```powershell
npm install
npm run dev
```

## Gerar versão de produção

```powershell
npm run build
```

O build grava o texto do site dentro do `dist/index.html` (`prerender.mjs`), para buscadores, robôs de IA e prévias de link lerem a página sem executar JavaScript. Também gera os dados estruturados das dúvidas frequentes a partir da mesma lista do `App.jsx`.

## Gerar HTML único

```powershell
npm run single
```

O comando cria `standalone.html`, que pode ser aberto diretamente no navegador.

## Atualizar o WhatsApp

O número está em `src/wa.js` no formato `55 + DDD + número`, hoje `5511919190999`.

## Estrutura principal

- `src/App.jsx`: conteúdo e seções.
- `src/styles.css`: design system e responsividade.
- `public/assets`: fotos e arquivos da identidade visual.
- `public/og-v2.png`: imagem social na paleta atual.
- `DIRECAO-CRIATIVA.md`: decisões dos sete prompts consolidadas.

## Publicar na Vercel

O projeto é detectado como Vite. Configuração esperada:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Não é preciso variável de ambiente.

## Arquivos gerados

`dist/` e `standalone.html` não vão para o repositório. São criados localmente por `npm run build` e `npm run single`.
