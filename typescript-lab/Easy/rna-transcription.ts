const complements = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
} as const;

type DnaNucleotide = keyof typeof complements;

function isDnaNucleotide(nucleotide: string): nucleotide is DnaNucleotide {
  return nucleotide in complements;
}

export function toRna(dna: string): string {
  return dna
    .split("")
    .map((nucleotide) => {
      if (!isDnaNucleotide(nucleotide)) {
        throw new Error("Invalid input DNA.");
      }

      return complements[nucleotide];
    })
    .join("");
}
console.log(toRna("AGTCAAGG"));
