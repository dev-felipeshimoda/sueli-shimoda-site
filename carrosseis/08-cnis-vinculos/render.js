const { render } = require('../_render');

render(__dirname, 2).catch((error) => {
  console.error(error);
  process.exit(1);
});
