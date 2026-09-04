const { render } = require('../_render');

render(__dirname).catch((e) => {
  console.error(e);
  process.exit(1);
});
