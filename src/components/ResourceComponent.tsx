import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  incrementGold,
  decrementGold,
  incrementWood,
  decrementWood,
  incrementStone,
  decrementStone,
  incrementSteel,
  decrementSteel,
} from "../store/resourceSlice";

const ResourceComponent: React.FC = () => {
  const resources = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Resources</h2>
      <div>
        <p>Gold: {resources.gold}</p>
        <button onClick={() => dispatch(incrementGold(10))}>+10 Gold</button>
        <button onClick={() => dispatch(decrementGold(10))}>-10 Gold</button>
      </div>
      <div>
        <p>Wood: {resources.wood}</p>
        <button onClick={() => dispatch(incrementWood(10))}>+10 Wood</button>
        <button onClick={() => dispatch(decrementWood(10))}>-10 Wood</button>
      </div>
      <div>
        <p>Stone: {resources.stone}</p>
        <button onClick={() => dispatch(incrementStone(10))}>+10 Stone</button>
        <button onClick={() => dispatch(decrementStone(10))}>-10 Stone</button>
      </div>
      <div>
        <p>Steel: {resources.steel}</p>
        <button onClick={() => dispatch(incrementSteel(10))}>+10 Steel</button>
        <button onClick={() => dispatch(decrementSteel(10))}>-10 Steel</button>
      </div>
    </div>
  );
};

export default ResourceComponent;
