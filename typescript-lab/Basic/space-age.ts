const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
const SECONDS_PER_EARTH_YEAR = 31557600;
export function age(
  selectedPlanet: keyof typeof orbitalPeriods,
  seconds: number,
): number {
  if (!Object.hasOwn(orbitalPeriods, selectedPlanet)) {
    throw new Error(`Nieznana planeta: ${selectedPlanet}`);
  }
  if (!Number.isFinite(seconds) || seconds <= 0) {
    throw new Error("Wiek w sekundach musi być skończoną liczbą dodatnią");
  }
  const ageInYears =
    seconds / (SECONDS_PER_EARTH_YEAR * orbitalPeriods[selectedPlanet]);
  const rounded = Number(ageInYears.toFixed(2));
  return rounded;
}
