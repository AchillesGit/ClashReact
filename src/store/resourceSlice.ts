import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceType, ResourceState } from "../models/resources.model";
import { ResourceService } from "../services/resourceService";

const resourceService = new ResourceService();

const initialState: ResourceState = resourceService.loadResources();

const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    incrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] += action.payload.amount;
      resourceService.saveResources(state);
    },
    decrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] -= action.payload.amount;
      resourceService.saveResources(state);
    },
  },
});

export const { incrementResource, decrementResource } = resourceSlice.actions;

export default resourceSlice.reducer;
