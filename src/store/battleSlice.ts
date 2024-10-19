// Redux Slice für den Kampfzustand
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface BattleState {
  result: string;
}

const initialState: BattleState = {
  result: "",
};

const battleSlice = createSlice({
  name: "battle",
  initialState,
  reducers: {
    setBattleResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },
  },
});

export const { setBattleResult } = battleSlice.actions;
export const selectBattleResult = (state: RootState) => state.battle.result;
export default battleSlice.reducer;
