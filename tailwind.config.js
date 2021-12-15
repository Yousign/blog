module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  presets: [require('./theme/tailwind-yousign-preset.js')],
  theme: {
    colors: {
      black: '#111028',
      white: '#FFFFFF',
      grey: {
        light: '#FCF8F3',
        medium: '#D8D8D8',
      },
      turquoiseBlue: '#5DE8C1',
      shamrock: '#1bc091',
      purple: {
        light: '#7355EC',
        medium: '#090022',
        dark: '#03001D',
        darker: '#030019',
      },
      yellow: '#FFE392',
      prussianBlue: '#002B44',
      coral: '#F4877A',
    },
    fontFamily: {
      sans: ['URWGeometric', 'Helvetica', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        sm: '480px',
        md: '740px',
        lg: '992px',
        xl: '1200px',
      },
    },
    extend: {
      height: {
        navbar: '80px',
      },
      minHeight: {
        navbar: '60px',
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
  variants: {
    extend: {
      scale: ['group-hover'],
      rotate: ['group-hover'],
    },
  },
  darkMode: 'class',
};
