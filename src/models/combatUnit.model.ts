export interface ICombatUnit {
  unitType: UnitType;
  attack: number;
  defense: number;
  health: number;
  name: string;
}

export interface CombatUnitsState {
  units: ICombatUnit[]; // Verändere das auf das Interface
}

// Enum für Einheitentypen
export enum UnitType {
  Infantry = "Infantry",
  Cavalry = "Cavalry",
  Archer = "Archer",
}

interface UnitCost {
  gold: number;
  wood: number;
  stone: number;
  steel: number;
}

export const UnitCosts: Record<UnitType, UnitCost> = {
  [UnitType.Infantry]: { gold: 1, wood: 1, stone: 2, steel: 3 },
  [UnitType.Cavalry]: { gold: 1, wood: 1, stone: 2, steel: 3 },
  [UnitType.Archer]: { gold: 1, wood: 1, stone: 2, steel: 3 },
};

export function displayUnitDetails(unit: ICombatUnit): string {
  return `Name: ${unit.name}, Type: ${unit.unitType}, Attack: ${unit.attack}, Defense: ${unit.defense}, Health: ${unit.health}`;
}
