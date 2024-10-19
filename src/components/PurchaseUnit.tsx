import React from "react";
import { UnitType, ICombatUnit } from "../models/combatUnit.model";
import { ResourceType } from "../models/resources.model";
import { decrementResource, selectResources } from "../store/resourceSlice";
import { addUnit } from "../store/unitSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const PurchaseUnitComponent: React.FC = () => {
  const resources = useAppSelector(selectResources);
  const dispatch = useAppDispatch();

  const unitCosts = {
    Infantry: { gold: 100, wood: 50, stone: 30, steel: 20 },
    Cavalry: { gold: 150, wood: 70, stone: 50, steel: 40 },
    Archer: { gold: 120, wood: 60, stone: 40, steel: 30 },
  };

  const canAffordUnit = (unitType: UnitType) => {
    const cost = unitCosts[unitType];
    return (
      resources[ResourceType.Gold] >= cost.gold &&
      resources[ResourceType.Wood] >= cost.wood &&
      resources[ResourceType.Stone] >= cost.stone &&
      resources[ResourceType.Steel] >= cost.steel
    );
  };

  const purchaseUnit = (unitType: UnitType) => {
    if (canAffordUnit(unitType)) {
      const cost = unitCosts[unitType];
      dispatch(
        decrementResource({ type: ResourceType.Gold, amount: cost.gold })
      );
      dispatch(
        decrementResource({ type: ResourceType.Wood, amount: cost.wood })
      );
      dispatch(
        decrementResource({ type: ResourceType.Stone, amount: cost.stone })
      );
      dispatch(
        decrementResource({ type: ResourceType.Steel, amount: cost.steel })
      );
      const newUnit = {
        unitType: unitType,
        attack: 10,
        defense: 5,
        health: 100,
        name: `New ${Math.random().toString(36).substr(2, 9)}`,
      } as ICombatUnit;
      dispatch(addUnit(newUnit));
      console.log(`Purchased ${unitType}`);
    } else {
      console.log(`Cannot afford ${unitType}`);
    }
  };

  return (
    <div>
      <h2>Purchase Units</h2>
      <div>
        <button onClick={() => purchaseUnit(UnitType.Infantry)}>
          Buy Infantry
        </button>
        <button onClick={() => purchaseUnit(UnitType.Cavalry)}>
          Buy Cavalry
        </button>
        <button onClick={() => purchaseUnit(UnitType.Archer)}>
          Buy Archer
        </button>
      </div>
    </div>
  );
};

export default PurchaseUnitComponent;
