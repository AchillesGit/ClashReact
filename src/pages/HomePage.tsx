import React, { useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

import { fetchUnits } from "../store/unitSlice";
import UnitList from "../components/UnitList";
import ResourceComponent from "../components/ResourceComponent";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const units = useSelector((state: RootState) => state.units.units);

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch]);

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
    </div>
  );
};

export default HomePage;
