import { CombatUnit, UnitType } from "../models/combatUnit";

export class UnitService {
  private units: CombatUnit[] = [];

  loadUnits(): void {
    try {
      const data = localStorage.getItem("units");
      if (data) {
        const parsedData = JSON.parse(data);
        this.units = parsedData.map(
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
      } else {
        console.warn("No units found in local storage.");
      }
    } catch (error) {
      console.error("Failed to load units from local storage:", error);
    }
  }

  saveUnits(): void {
    try {
      const data = JSON.stringify(this.units);
      localStorage.setItem("units", data);
    } catch (error) {
      console.error("Failed to save units to local storage:", error);
    }
  }

  getUnits(): CombatUnit[] {
    return this.units;
  }

  addUnit(unit: CombatUnit): void {
    this.units = [...this.units, unit];
    this.saveUnits();
  }
}
