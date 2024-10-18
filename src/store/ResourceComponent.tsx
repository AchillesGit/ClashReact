import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { ResourceType } from "../models/resources";
import { incrementResource, decrementResource } from "../store/resourceSlice";

const ResourceComponent: React.FC = () => {
  const resources = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Resources</h2>
      <div>
        <p>Gold: {resources[ResourceType.Gold]}</p>
        <button
          onClick={() =>
            dispatch(incrementResource({ type: ResourceType.Gold, amount: 10 }))
          }
        >
          +10 Gold
        </button>
        <button
          onClick={() =>
            dispatch(decrementResource({ type: ResourceType.Gold, amount: 10 }))
          }
        >
          -10 Gold
        </button>
      </div>
      <div>
        <p>Wood: {resources[ResourceType.Wood]}</p>
        <button
          onClick={() =>
            dispatch(incrementResource({ type: ResourceType.Wood, amount: 10 }))
          }
        >
          +10 Wood
        </button>
        <button
          onClick={() =>
            dispatch(decrementResource({ type: ResourceType.Wood, amount: 10 }))
          }
        >
          -10 Wood
        </button>
      </div>
      <div>
        <p>Stone: {resources[ResourceType.Stone]}</p>
        <button
          onClick={() =>
            dispatch(
              incrementResource({ type: ResourceType.Stone, amount: 10 })
            )
          }
        >
          +10 Stone
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Stone, amount: 10 })
            )
          }
        >
          -10 Stone
        </button>
      </div>
      <div>
        <p>Steel: {resources[ResourceType.Steel]}</p>
        <button
          onClick={() =>
            dispatch(
              incrementResource({ type: ResourceType.Steel, amount: 10 })
            )
          }
        >
          +10 Steel
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Steel, amount: 10 })
            )
          }
        >
          -10 Steel
        </button>
      </div>
    </div>
  );
};

export default ResourceComponent;
