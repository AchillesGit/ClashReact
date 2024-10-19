// /services/battleService.ts
import { ICombatUnit } from "../models/combatUnit.model";

// Funktion zur Durchführung eines Kampfes
export function battle(unitA: ICombatUnit, unitB: ICombatUnit): string {
  let unitAHealth = unitA.health;
  let unitBHealth = unitB.health;

  // Kampfsimulation (rundenbasiert)
  while (unitAHealth > 0 && unitBHealth > 0) {
    unitBHealth -= Math.max(0, unitA.attack - unitB.defense);
    if (unitBHealth > 0) {
      unitAHealth -= Math.max(0, unitB.attack - unitA.defense);
    }
  }

  // Bestimme den Sieger
  if (unitAHealth > 0) {
    return `${unitA.name} gewinnt den Kampf!`;
  } else if (unitBHealth > 0) {
    return `${unitB.name} gewinnt den Kampf!`;
  } else {
    return "Der Kampf endet unentschieden!";
  }
}
