import React from "react";
import { useDispatch } from "react-redux";
import { ICombatUnit } from "../models/combatUnit.model";
import { AppDispatch } from "../store/store";
import { removeUnit } from "../store/unitSlice";

const UnitList: React.FC<{ units: ICombatUnit[] }> = ({ units }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (index: number) => {
    dispatch(removeUnit(index));
  };

  return (
    <ul>
      {units.map((unit, index) => (
        <li key={unit.name}>
          {unit.name} - {unit.unitType} - Attack: {unit.attack}, Defense:{" "}
          {unit.defense}, Health: {unit.health}
          <button onClick={() => handleRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default UnitList;
