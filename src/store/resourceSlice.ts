import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResourceState {
  gold: number;
  wood: number;
  stone: number;
  steel: number;
}

const initialState: ResourceState = {
  gold: 0,
  wood: 0,
  stone: 0,
  steel: 0,
};

const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    incrementGold: (state, action: PayloadAction<number>) => {
      state.gold += action.payload;
    },
    decrementGold: (state, action: PayloadAction<number>) => {
      state.gold -= action.payload;
    },
    incrementWood: (state, action: PayloadAction<number>) => {
      state.wood += action.payload;
    },
    decrementWood: (state, action: PayloadAction<number>) => {
      state.wood -= action.payload;
    },
    incrementStone: (state, action: PayloadAction<number>) => {
      state.stone += action.payload;
    },
    decrementStone: (state, action: PayloadAction<number>) => {
      state.stone -= action.payload;
    },
    incrementSteel: (state, action: PayloadAction<number>) => {
      state.steel += action.payload;
    },
    decrementSteel: (state, action: PayloadAction<number>) => {
      state.steel -= action.payload;
    },
  },
});

export const {
  incrementGold,
  decrementGold,
  incrementWood,
  decrementWood,
  incrementStone,
  decrementStone,
  incrementSteel,
  decrementSteel,
} = resourceSlice.actions;

export default resourceSlice.reducer;
