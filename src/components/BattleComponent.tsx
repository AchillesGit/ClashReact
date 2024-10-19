import React from "react";
import { useDispatch } from "react-redux";
import { selectBattleResult, setBattleResult } from "../store/battleSlice";
import { ICombatUnit, UnitType } from "../models/combatUnit.model";
import { battle } from "../services/battleService";
import { useAppSelector } from "../hooks/hooks";

const BattleComponent = () => {
  const dispatch = useDispatch();
  const battleResult = useAppSelector(selectBattleResult);

  // Beispiel Einheiten
  const unitA: ICombatUnit = {
    name: "Krieger A",
    unitType: UnitType.Infantry,
    attack: 10,
    defense: 5,
    health: 100,
  };
  const unitB: ICombatUnit = {
    name: "Krieger B",
    unitType: UnitType.Cavalry,
    attack: 8,
    defense: 7,
    health: 100,
  };

  const handleBattle = () => {
    const result = battle(unitA, unitB);
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
