const { rem } = require('polished');

const fontFamily = {
  heading: ['Recoleta', 'serif'],
  text: ['URWGeometric', 'Arial', 'sans-serif'],
  sign: ['Caveat', 'cursive'],
  mono: ['Inconsolata', 'monospace'],
};

const fontSizesinPx = [10, 12, 14, 16, 18, 20, 21, 24, 28, 32, 42];
const fontSize = fontSizesinPx.reduce((acc, size) => {
  acc[size] = rem(size);
  return acc;
}, {});

const lineHeightsinPx = [13, 14, 19, 21, 22, 24, 28, 32, 36, 48];
const lineHeight = lineHeightsinPx.reduce((acc, size) => {
  acc[size] = rem(size);
  return acc;
}, {});
// const lineHeights = lineHeightsinPx.map((size) => rem(size));

// const letterSpacings = {
//   normal: 'normal',
//   tracked: '0.1em',
//   tight: '-0.05em',
//   mega: '0.25em',
// };

// const fontVariants = {
//   display: {
//     fontFamily: fonts['heading'],
//     fontSize: fontSizes[9],
//     lineHeight: lineHeights[8],
//   },
//   display2: {
//     fontFamily: fonts['heading'],
//     fontSize: fontSizes[7],
//     lineHeight: lineHeights[6],
//   },
//   title: {
//     fontSize: fontSizes[6],
//     lineHeight: lineHeights[6],
//   },
//   title2: {
//     fontFamily: fonts['heading'],
//     fontSize: fontSizes[5],
//     lineHeight: lineHeights[3],
//   },
//   headline: {
//     fontSize: fontSizes[4],
//     lineHeight: lineHeights[5],
//   },
//   body: {
//     fontSize: fontSizes[3],
//     lineHeight: lineHeights[4],
//   },
//   body2: {
//     fontSize: fontSizes[3],
//     lineHeight: lineHeights[5],
//     fontWeight: 500,
//   },
//   footnote: {
//     fontSize: fontSizes[2],
//     lineHeight: lineHeights[2],
//   },
//   caption: {
//     fontSize: fontSizes[1],
//     lineHeight: lineHeights[1],
//   },
//   caption2: {
//     fontSize: fontSizes[0],
//     lineHeight: lineHeights[0],
//   },
//   signature: {
//     fontFamily: fonts['sign'],
//     fontSize: rem('70px'),
//     lineHeight: 1,
//     letterSpacing: rem('-4px'),
//   },
//   monospace: {
//     fontFamily: fonts['mono'],
//     fontSize: fontSizes[1],
//     lineHeight: lineHeights[1],
//   },
// };

module.exports = {
  fontFamily,
  fontSize,
  lineHeight,
};
