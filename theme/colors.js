const { hsl } = require('polished');

const base = {
  neutral: {
    hue: 0,
    saturation: 0,
    variants: [
      { lightness: 0, alias: 'black' },
      { lightness: 100, alias: 'white' },
    ],
  },
  coral: {
    hue: 6,
    saturation: 0.85,
    variants: [
      { lightness: 52, alias: 'cinnabar' },
      { lightness: 62 },
      { lightness: 72, alias: 'froly' },
      { lightness: 94 },
      { lightness: 97 },
    ],
  },
  warmGrey: {
    hue: 23,
    saturation: 0.03,
    variants: [
      { lightness: 52, alias: 'schooner' },
      { lightness: 72 },
      { lightness: 92, alias: 'ebb' },
      { lightness: 96 },
      { lightness: 98, alias: 'pampas' },
    ],
  },
  pastelPink: {
    hue: 18,
    saturation: 0.95,
    variants: [{ lightness: 77 }, { lightness: 85 }, { lightness: 96 }, { lightness: 98 }],
  },
  yellow: {
    hue: 37,
    saturation: 1,
    variants: [
      { lightness: 65, alias: 'yellowOrange' },
      { lightness: 74 },
      { lightness: 82 },
      { lightness: 94 },
      { lightness: 98 },
    ],
  },
  turquoise: {
    hue: 163,
    saturation: 0.75,
    variants: [
      { lightness: 43, alias: 'shamrock' },
      { lightness: 48 },
      { lightness: 64, alias: 'turquoiseBlue' },
      { lightness: 95 },
    ],
  },
  coolGrey: {
    hue: 194,
    saturation: 0.13,
    variants: [
      { lightness: 43, alias: 'cuttySark' },
      { lightness: 53, alias: 'juniper' },
    ],
  },
  blue: {
    hue: 202,
    saturation: 1,
    variants: [
      { lightness: 5, alias: 'swamp' },
      { lightness: 13, alias: 'prussianBlue' },
      { lightness: 43, alias: 'lochmara' },
      { lightness: 55 },
      { lightness: 70 },
      { lightness: 97 },
    ],
  },
  greyBlue: {
    hue: 203,
    saturation: 0.45,
    variants: [{ lightness: 72 }, { lightness: 80, alias: 'periwinkleGray' }],
  },
  indigo: {
    hue: 215,
    saturation: 0.47,
    variants: [{ lightness: 11 }, { lightness: 29, alias: 'astronaut' }],
  },
  purple: {
    hue: 252,
    saturation: 0.8,
    variants: [{ lightness: 55 }, { lightness: 63 }],
  },
};

const colors = Object.entries(base).reduce((acc, [name, { hue: h, saturation: s, variants }]) => {
  acc[name] = variants.reduce((variant, { lightness, alias }) => {
    variant[lightness] = hsl(h, s, lightness / 100);
    if (alias) {
      acc[alias] = hsl(h, s, lightness / 100);
    }
    return variant;
  }, {});
  return acc;
}, {});

module.exports = {
  colors,
};
