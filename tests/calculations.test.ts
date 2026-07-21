import { describe, expect, it } from "vitest";
import {
  addDays,
  buildGrowPlan,
  calculateDLI,
  isValidDateInput,
} from "@/lib/utils";
describe("DLI-Berechnung", () => {
  it("verknüpft PPFD und Stunden", () =>
    expect(calculateDLI(500, 18)).toBeCloseTo(32.4, 3));
});
describe("Grow-Plan", () => {
  it("berechnet fortlaufende Phasentermine", () => {
    const p = buildGrowPlan("2026-01-01", 4, 8, false);
    expect(p[0].from.toISOString().slice(0, 10)).toBe("2026-01-01");
    expect(p[3].days).toBe(28);
    expect(p[4].from.getTime()).toBe(p[3].to.getTime());
  });
  it("überspringt bei Autoflower die frei geplante Vegetationsdauer", () =>
    expect(buildGrowPlan("2026-01-01", 12, 8, true)[3].days).toBe(7));
  it("wartet bei einer unvollständigen Datumseingabe mit der Berechnung", () =>
    expect(buildGrowPlan("", 4, 8, false)).toEqual([]));
});
describe("Datumshilfe", () => {
  it("addiert Kalendertage", () =>
    expect(addDays("2026-02-01", 7).toISOString().slice(0, 10)).toBe(
      "2026-02-08",
    ));
  it("akzeptiert nur vollständige und echte ISO-Kalenderdaten", () => {
    expect(isValidDateInput("2026-01-01")).toBe(true);
    expect(isValidDateInput("")).toBe(false);
    expect(isValidDateInput("2026-1-1")).toBe(false);
    expect(isValidDateInput("2026-02-30")).toBe(false);
  });
});
