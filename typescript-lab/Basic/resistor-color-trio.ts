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

const units = ["ohms", "kiloohms", "megaohms", "gigaohms"] as const;

type ResistorColor = keyof typeof colorValues;

export function decodedResistorValue(colors: ResistorColor[]): string {
  let value =
    (colorValues[colors[0]] * 10 + colorValues[colors[1]]) *
    10 ** colorValues[colors[2]];
  let unitIndex = 0;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex += 1;
  }

  return `${value} ${units[unitIndex]}`;
}
console.log(decodedResistorValue(["blue", "grey", "red"]));
