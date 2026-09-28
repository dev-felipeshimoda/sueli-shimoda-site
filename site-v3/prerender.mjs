import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

// Escreve o texto do site dentro do index.html do dist. Sem isso a página chega vazia
// e só ganha conteúdo depois do JavaScript, o que robôs de IA e prévias de link não executam.
const raiz = process.cwd()
const saidaSsr = join(raiz, 'dist-ssr')
const { render, faqSchema } = await import(pathToFileURL(join(saidaSsr, 'entry-server.js')).href)

const arquivo = join(raiz, 'dist', 'index.html')
const marcador = '<div id="root"></div>'
let html = readFileSync(arquivo, 'utf8')

if (!html.includes(marcador)) {
  throw new Error('Raiz vazia não encontrada em dist/index.html.')
}

const schema = JSON.stringify(faqSchema()).replaceAll('<', '\\u003c')

html = html
  .replace(marcador, () => `<div id="root">${render()}</div>`)
  .replace('</head>', () => `  <script type="application/ld+json">${schema}</script>\n  </head>`)

writeFileSync(arquivo, html)
rmSync(saidaSsr, { recursive: true, force: true })
console.log('dist/index.html gerado com o conteúdo do site no HTML')
