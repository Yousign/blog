module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  presets: [require('./theme/tailwind-yousign-preset.js')],
  theme: {
    colors: {
      black: '#00010E',
      white: '#FFFFFF',
      grey: {
        light: '#FCF8F3',
        medium: '#D8D8D8',
      },
      turquoiseBlue: { light: '#C2FFEA', medium: '#AFFFE3' },
      purple: {
        light: '#7355EC',
        medium: '#090022',
        dark: '#03001D',
        darker: '#030019',
      },
      yellow: '#FFE392',
      prussianBlue: '#002B44',
    },
    fontFamily: {
      sans: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      height: {
        navbar: '80px',
      },
      minHeight: {
        navbar: '80px',
      },
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
