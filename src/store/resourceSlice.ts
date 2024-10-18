import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceType, ResourceState } from "../models/resources";

const initialState: ResourceState = {
  [ResourceType.Gold]: 0,
  [ResourceType.Wood]: 0,
  [ResourceType.Stone]: 0,
  [ResourceType.Steel]: 0,
};

const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    incrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] += action.payload.amount;
    },
    decrementResource: (
      state,
      action: PayloadAction<{ type: ResourceType; amount: number }>
    ) => {
      state[action.payload.type] -= action.payload.amount;
    },
  },
});

export const { incrementResource, decrementResource } = resourceSlice.actions;

export default resourceSlice.reducer;
