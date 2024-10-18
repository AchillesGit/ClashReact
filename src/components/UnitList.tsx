import React from "react";
import { CombatUnit } from "../models/combatUnit";

const UnitList: React.FC<{ units: CombatUnit[] }> = ({ units }) => {
  return (
    <ul>
      {units.map((unit) => (
        <li key={unit.name}>
          {unit.name} - {unit.unitType} - Attack: {unit.attack}, Defense:{" "}
          {unit.defense}, Health: {unit.health}
        </li>
      ))}
    </ul>
  );
};

export default UnitList;
