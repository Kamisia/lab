const colorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

export const COLORS = Object.keys(colorValues);

export function colorCode(color: keyof typeof colorValues): number {
  return colorValues[color];
}
console.log(colorCode("green"));
