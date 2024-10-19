import React from "react";
import { ResourceType } from "../models/resources";
import { incrementResource, decrementResource } from "../store/resourceSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const ResourceComponent: React.FC = () => {
  const resources = useAppSelector((state) => state.resources);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Resources</h2>
      <div>
        <p>Gold: {resources[ResourceType.Gold]}</p>
        <button
          onClick={() =>
            dispatch(
              incrementResource({ type: ResourceType.Gold, amount: 1111110 })
            )
          }
        >
          +10 Gold
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Gold, amount: 11111110 })
            )
          }
        >
          -10 Gold
        </button>
      </div>
      <div>
        <p>Wood: {resources[ResourceType.Wood]}</p>
        <button
          onClick={() =>
            dispatch(
              incrementResource({ type: ResourceType.Wood, amount: 11111110 })
            )
          }
        >
          +10 Wood
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Wood, amount: 11111110 })
            )
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
              incrementResource({ type: ResourceType.Stone, amount: 11111110 })
            )
          }
        >
          +10 Stone
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Stone, amount: 1111110 })
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
              incrementResource({ type: ResourceType.Steel, amount: 11111110 })
            )
          }
        >
          +10 Steel
        </button>
        <button
          onClick={() =>
            dispatch(
              decrementResource({ type: ResourceType.Steel, amount: 11111110 })
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
