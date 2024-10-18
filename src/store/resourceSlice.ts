import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResourceType, ResourceState } from "../models/resources";

const initialState: ResourceState = {
  [ResourceType.Gold]: 11111110,
  [ResourceType.Wood]: 11111110,
  [ResourceType.Stone]: 11111110,
  [ResourceType.Steel]: 11111110,
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
