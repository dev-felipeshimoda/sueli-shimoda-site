const { render } = require('../_render');

render(__dirname).catch((error) => {
  console.error(error);
  process.exit(1);
});
