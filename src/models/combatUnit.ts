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

export class CombatUnit {
  unitType: UnitType;
  attack: number;
  defense: number;
  health: number;
  name: string;

  constructor(
    unitType: UnitType,
    attack: number,
    defense: number,
    health: number,
    name: string
  ) {
    this.unitType = unitType;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.name = name;
  }

  displayUnitDetails(): string {
    return `Name: ${this.name}, Type: ${this.unitType}, Attack: ${this.attack}, Defense: ${this.defense}, Health: ${this.health}`;
  }
}
