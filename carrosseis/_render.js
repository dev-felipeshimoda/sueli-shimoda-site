const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('playwright');

const LARGURA = 1080;
const ALTURA = 1350;

async function render(dir) {
  const html = path.join(dir, 'carrossel.html');
  if (!fs.existsSync(html)) throw new Error('carrossel.html nao encontrado em ' + dir);

  const saida = path.join(dir, 'instagram');
  fs.mkdirSync(saida, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: LARGURA, height: ALTURA },
    deviceScaleFactor: 1,
  });

  await page.goto(pathToFileURL(html).href, { waitUntil: 'load' });

  // Sem as fontes carregadas o screenshot sai com a fonte de reserva.
  try {
    await page.waitForFunction(() => document.fonts.status === 'loaded', { timeout: 15000 });
  } catch {
    console.warn('  aviso: as Google Fonts nao carregaram, o PNG sai com fonte de reserva');
  }

  const slides = await page.locator('.slide').all();
  console.log(path.basename(dir) + ': ' + slides.length + ' slides');

  for (let i = 0; i < slides.length; i++) {
    const nome = 'slide-' + String(i + 1).padStart(2, '0') + '.png';
    await slides[i].screenshot({ path: path.join(saida, nome) });
    console.log('  ' + nome);
  }

  await browser.close();
}

module.exports = { render, LARGURA, ALTURA };
