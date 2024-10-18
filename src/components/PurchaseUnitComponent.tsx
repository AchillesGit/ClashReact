import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { UnitType, UnitCosts } from "../models/combatUnit";
import { ResourceType } from "../models/resources";
import { decrementResource } from "../store/resourceSlice";

const PurchaseUnitComponent: React.FC = () => {
  const resources = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch<AppDispatch>();

  const canAffordUnit = (unitType: UnitType) => {
    const cost = UnitCosts[unitType];
    return (
      resources[ResourceType.Gold] >= cost.gold &&
      resources[ResourceType.Wood] >= cost.wood &&
      resources[ResourceType.Stone] >= cost.stone &&
      resources[ResourceType.Steel] >= cost.steel
    );
  };

  const purchaseUnit = (unitType: UnitType) => {
    if (canAffordUnit(unitType)) {
      const cost = UnitCosts[unitType];
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
