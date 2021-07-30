const sveltePreprocess = require('svelte-preprocess');
const { windi } = require('svelte-windicss-preprocess');

const windiPlugin = windi({
  configPath: './tailwind.config.js',
});

module.exports = {
  preprocess: [
    // if you comment to disable right here, hydrate-client will work again
    windiPlugin,
    sveltePreprocess({
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};
