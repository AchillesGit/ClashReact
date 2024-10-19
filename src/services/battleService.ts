import { ICombatUnit } from "../models/combatUnit.model";

export function battle(
  playerUnits: ICombatUnit[],
  enemyUnits: ICombatUnit[]
): string {
  // sort units randomly
  const shuffledPlayerUnits = [...playerUnits].sort(() => Math.random() - 0.5);
  enemyUnits = enemyUnits.sort(() => Math.random() - 0.5);

  // fight each unit against each other
  for (let i = 0; i < shuffledPlayerUnits.length; i++) {
    for (let j = 0; j < enemyUnits.length; j++) {
      const result = fight(playerUnits[i], enemyUnits[j]);
      console.log(result);
    }
  }

  return "Kampf noch nicht implementiert!";
}

export function fight(unitA: ICombatUnit, unitB: ICombatUnit): string {
  let unitAHealth = unitA.health;
  let unitBHealth = unitB.health;

  while (unitAHealth > 0 && unitBHealth > 0) {
    unitBHealth -= Math.max(0, unitA.attack - unitB.defense);
    if (unitBHealth > 0) {
      unitAHealth -= Math.max(0, unitB.attack - unitA.defense);
    }
  }

  if (unitAHealth > 0) {
    return `${unitA.name} gewinnt den Kampf!`;
  } else if (unitBHealth > 0) {
    return `${unitB.name} gewinnt den Kampf!`;
  } else {
    return "Der Kampf endet unentschieden!";
  }
}
