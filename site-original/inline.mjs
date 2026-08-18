// Gera um HTML único (standalone.html) com JS, CSS e imagens embutidos,
// para abrir direto no Chrome via file:// sem precisar de servidor.
// Uso: node inline.mjs  (rode depois do `vite build`)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const assetsDir = join(dist, 'assets')

let html = readFileSync(join(dist, 'index.html'), 'utf8')

// mapa basename -> data URI (todas as imagens de dist/assets)
const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', svg: 'image/svg+xml' }
const imgs = {}
for (const f of readdirSync(assetsDir)) {
  const ext = f.split('.').pop().toLowerCase()
  if (mime[ext]) {
    const b64 = readFileSync(join(assetsDir, f)).toString('base64')
    imgs[f] = `data:${mime[ext]};base64,${b64}`
  }
}

const swapImgs = (code) => {
  for (const [name, uri] of Object.entries(imgs)) {
    // pega /assets/x.jpg, ./assets/x.jpg, ../assets/x.jpg e assets/x.jpg
    code = code.replaceAll(`../assets/${name}`, uri)
    code = code.replaceAll(`./assets/${name}`, uri)
    code = code.replaceAll(`/assets/${name}`, uri)
    code = code.replaceAll(`assets/${name}`, uri)
  }
  return code
}

// nomes reais dos bundles a partir do index.html
const jsFile = html.match(/src="\.\/assets\/([^"]+\.js)"/)[1]
const cssFile = html.match(/href="\.\/assets\/([^"]+\.css)"/)[1]

let js = readFileSync(join(assetsDir, jsFile), 'utf8')
let css = readFileSync(join(assetsDir, cssFile), 'utf8')

js = swapImgs(js).replaceAll('</script', '<\\/script')
css = swapImgs(css)

// substitui as tags externas por conteúdo inline.
// Usa função de replace: com string, um "$&" dentro do bundle (comum em
// libs minificadas) seria interpretado e reinjetaria a tag original.
html = html
  .replace(/\s*<script type="module"[^>]*src="\.\/assets\/[^"]+\.js"><\/script>/, () => `\n<script type="module">${js}</script>`)
  .replace(/\s*<link rel="stylesheet"[^>]*href="\.\/assets\/[^"]+\.css">/, () => `\n<style>${css}</style>`)

const out = join(process.cwd(), 'standalone.html')
writeFileSync(out, html)
console.log('Gerado:', out, `(${(html.length / 1024 / 1024).toFixed(2)} MB)`)
