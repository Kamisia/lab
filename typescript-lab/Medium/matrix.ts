export class Matrix {
  readonly rows: number[][];
  readonly columns: number[][];

  constructor(input: string) {
    const trimmedInput = input.trim();

    this.rows =
      trimmedInput === ""
        ? []
        : trimmedInput
            .split(/\r?\n/)
            .map((row) => row.trim().split(/\s+/).map(Number));

    this.columns = (this.rows[0] ?? []).map((_, columnIndex) =>
      this.rows.map((row) => row[columnIndex]),
    );
  }
}
