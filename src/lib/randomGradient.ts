/**
 * Random gradient produces a random gradient to use in background colors
 * @return {string} A random rgba to rgba string
 */
const randomGradient = (): string => {
  const randomBetween = () => (Math.random() * 255).toFixed(0);
  const r = randomBetween;
  return `linear-gradient(180deg, rgba(${r()},${r()},${r()}, 1), rgba(${r()},${r()},${r()}, 1))`;
};

export default randomGradient;
