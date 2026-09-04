// Este carrossel comeca no slide 02. A capa e a foto editorial ja aprovada,
// salva direto em instagram/slide-01.png.
const { render } = require('../_render');

render(__dirname, 2).catch((e) => {
  console.error(e);
  process.exit(1);
});
