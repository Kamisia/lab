export function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const normalizedSentence = sentence.toLowerCase();
  return alphabet.every((letter) => normalizedSentence.includes(letter));
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
