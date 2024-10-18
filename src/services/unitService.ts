import { CombatUnit, UnitType } from "../models/combatUnit";

export class UnitService {
  private units: CombatUnit[] = [];

  async loadUnits(): Promise<void> {
    try {
      const response = await fetch("/data/units.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.units = data.map(
        (unit: {
          unitType: string;
          attack: number;
          defense: number;
          health: number;
          name: string;
        }) =>
          new CombatUnit(
            unit.unitType as UnitType,
            unit.attack,
            unit.defense,
            unit.health,
            unit.name
          )
      );
    } catch (error) {
      console.error("Failed to load units:", error);
    }
  }

  getUnits(): CombatUnit[] {
    return this.units;
  }
}
