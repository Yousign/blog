// legacy (in px) = [0, 4, 10, 16, 20, 30, 60, 128, 256, 512];
// grid (in rem) = [0, 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 1.75rem, 2rem, 2.25rem, 2.5rem, 2.75rem, 3rem, 3.25rem, 3.5rem, 3.75rem; 4rem];
// grid (in px) = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64];

// mapping legacy to grid
// 0 👉 0
// 1 👉 1
// 2 👉 2
// 3 👉 4
// 4 👉 5
// 5 👉 8
// 6 👉 15

const spacing = [...new Array(30)].reduce((acc, space, index) => {
  acc[index] = `${index * 0.25}rem`;
  return acc;
}, {});

module.exports = {
  spacing,
};
