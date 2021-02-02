module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  presets: [require('./theme/tailwind-yousign-preset.js')],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
