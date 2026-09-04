const { render } = require('../_render');

// A capa (slide-01) veio pronta do Felipe. Os slides deste HTML comecam no 02.
render(__dirname, 2).catch((e) => {
  console.error(e);
  process.exit(1);
});
