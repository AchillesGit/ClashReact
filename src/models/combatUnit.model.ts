import { ResourceType } from "./resources.model";

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

type UnitCosts = {
  [key in ResourceType]: number;
};

export const UnitCosts: Record<UnitType, UnitCosts> = {
  [UnitType.Infantry]: {
    [ResourceType.Gold]: 1,
    [ResourceType.Wood]: 1,
    [ResourceType.Stone]: 2,
    [ResourceType.Steel]: 3,
  },
  [UnitType.Cavalry]: {
    [ResourceType.Gold]: 1,
    [ResourceType.Wood]: 1,
    [ResourceType.Stone]: 2,
    [ResourceType.Steel]: 3,
  },
  [UnitType.Archer]: {
    [ResourceType.Gold]: 1,
    [ResourceType.Wood]: 1,
    [ResourceType.Stone]: 2,
    [ResourceType.Steel]: 3,
  },
};
