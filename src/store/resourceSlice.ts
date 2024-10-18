import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceType, ResourceState } from "../models/resources";
import { ResourceService } from "../services/resourceService";

const resourceService = new ResourceService();
resourceService.loadResources();

const initialState: ResourceState = resourceService.getResources();

const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    incrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] += action.payload.amount;
      resourceService.updateResource(
        action.payload.type,
        action.payload.amount
      );
    },
    decrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] -= action.payload.amount;
      resourceService.updateResource(
        action.payload.type,
        -action.payload.amount
      );
    },
    loadResources: (state) => {
      const resources = resourceService.getResources();
      state[ResourceType.Gold] = resources[ResourceType.Gold];
      state[ResourceType.Wood] = resources[ResourceType.Wood];
      state[ResourceType.Stone] = resources[ResourceType.Stone];
      state[ResourceType.Steel] = resources[ResourceType.Steel];
    },
  },
});

export const { incrementResource, decrementResource, loadResources } =
  resourceSlice.actions;

export default resourceSlice.reducer;
