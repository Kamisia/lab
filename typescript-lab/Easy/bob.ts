export function hey(message: string): string {
  const text = message.trim();

  if (text.length === 0) {
    return 'Fine. Be that way!';
  }

  const isQuestion = text.endsWith('?');
  const isYelling = text === text.toUpperCase() && text !== text.toLowerCase();

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
}
