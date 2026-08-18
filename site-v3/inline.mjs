import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const assetsDir = join(dist, 'assets')
let html = readFileSync(join(dist, 'index.html'), 'utf8')

const mime = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  svg: 'image/svg+xml',
}

const images = {}
for (const file of readdirSync(assetsDir)) {
  const extension = file.split('.').pop().toLowerCase()
  if (mime[extension]) {
    images[file] = `data:${mime[extension]};base64,${readFileSync(join(assetsDir, file)).toString('base64')}`
  }
}

const publicAssetsDir = join(dist, 'assets')
if (existsSync(publicAssetsDir)) {
  for (const file of readdirSync(publicAssetsDir)) {
    const extension = file.split('.').pop().toLowerCase()
    if (mime[extension] && !images[file]) {
      images[file] = `data:${mime[extension]};base64,${readFileSync(join(publicAssetsDir, file)).toString('base64')}`
    }
  }
}

function inlineImages(code) {
  for (const [name, uri] of Object.entries(images)) {
    code = code.replaceAll(`../assets/${name}`, uri)
    code = code.replaceAll(`./assets/${name}`, uri)
    code = code.replaceAll(`/assets/${name}`, uri)
    code = code.replaceAll(`assets/${name}`, uri)
  }
  return code
}

const jsMatch = html.match(/src="\.\/assets\/([^"]+\.js)"/)
const cssMatch = html.match(/href="\.\/assets\/([^"]+\.css)"/)

if (!jsMatch || !cssMatch) {
  throw new Error('Bundles do build não encontrados.')
}

let js = readFileSync(join(assetsDir, jsMatch[1]), 'utf8')
let css = readFileSync(join(assetsDir, cssMatch[1]), 'utf8')

js = inlineImages(js).replaceAll('</script', '<\\/script')
css = inlineImages(css)

html = inlineImages(html)
  .replace(/\s*<script type="module"[^>]*src="\.\/assets\/[^"]+\.js"><\/script>/, () => `\n<script type="module">${js}</script>`)
  .replace(/\s*<link rel="stylesheet"[^>]*href="\.\/assets\/[^"]+\.css">/, () => `\n<style>${css}</style>`)

writeFileSync(join(process.cwd(), 'standalone.html'), html)
writeFileSync(join(dist, 'standalone.html'), html)
console.log(`standalone.html gerado com ${(html.length / 1024 / 1024).toFixed(2)} MB`)
