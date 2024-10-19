import React from "react";
import Button from "../components/Button";

import UnitList from "../components/UnitList";
import ResourceComponent from "../components/Resource";
import PurchaseUnitComponent from "../components/PurchaseUnit";
import { useAppSelector } from "../hooks/hooks";

const HomePage: React.FC = () => {
  const units = useAppSelector((state) => state.units.units);

  return (
    <div>
      <h1>Welcome to My Game</h1>
      <Button text="Start Game" />
      <div>
        <h2>Units</h2>
        <UnitList units={units} />
      </div>
      <div>
        <ResourceComponent />
      </div>
      <div>
        <PurchaseUnitComponent />
      </div>
    </div>
  );
};

export default HomePage;
