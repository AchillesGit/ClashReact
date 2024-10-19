import { ICombatUnit } from "../models/combatUnit.model";

export class UnitService {
  loadUnits(): ICombatUnit[] {
    let units: ICombatUnit[] = [];
    try {
      const data = localStorage.getItem("units");
      if (data) {
        units = JSON.parse(data).map((unit: ICombatUnit) => unit);
      } else {
        console.warn("No units found in local storage.");
      }
    } catch (error) {
      console.error("Failed to load units from local storage:", error);
    }
    return units;
  }

  saveUnits(units: ICombatUnit[]): void {
    try {
      const data = JSON.stringify(units);
      localStorage.setItem("units", data);
    } catch (error) {
      console.error("Failed to save units to local storage:", error);
    }
  }
}
