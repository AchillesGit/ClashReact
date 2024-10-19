import React from "react";
import { useDispatch } from "react-redux";
import { selectBattleResult, setBattleResult } from "../store/battleSlice";
import { ICombatUnit, UnitType } from "../models/combatUnit.model";
import { battle } from "../services/battleService";
import { useAppSelector } from "../hooks/hooks";
import { selectUnits } from "../store/unitSlice";

const BattleComponent = () => {
  const dispatch = useDispatch();
  const battleResult = useAppSelector(selectBattleResult);
  const units = useAppSelector(selectUnits);

  const enemyUnits: ICombatUnit[] = [
    {
      name: "Ork",
      unitType: UnitType.Infantry,
      health: 100,
      attack: 10,
      defense: 5,
    },
    {
      name: "Zombie",
      unitType: UnitType.Infantry,
      health: 50,
      attack: 5,
      defense: 2,
    },
  ];

  const handleBattle = () => {
    const result = battle(units, enemyUnits);
    dispatch(setBattleResult(result));
  };

  return (
    <div>
      <h1>Kampf Simulation</h1>
      <button onClick={handleBattle}>Kampf starten</button>
      <p>{battleResult}</p>
    </div>
  );
};

export default BattleComponent;
