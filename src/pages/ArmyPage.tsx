import React from "react";
import PurchaseUnitComponent from "../components/PurchaseUnit";
import UnitList from "../components/UnitList";
import { useAppSelector } from "../hooks/hooks";

const ArmyPage: React.FC = () => {
  const units = useAppSelector((state) => state.units.units);
  return (
    <>
      <h2>Units</h2>
      <UnitList units={units} />
      <div>
        <PurchaseUnitComponent />
      </div>
    </>
  );
};

export default ArmyPage;
