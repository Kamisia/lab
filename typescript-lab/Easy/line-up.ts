function ordinalSuffix(number: number): string {
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return "th";
  }

  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function format(name: string, number: number): string {
  return `${name}, you are the ${number}${ordinalSuffix(number)} customer we serve today. Thank you!`;
}

console.log(format("Kasia", 6));
