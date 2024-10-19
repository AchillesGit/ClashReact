import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { CombatUnitsState, ICombatUnit } from "../models/combatUnit.model";
import { UnitService } from "../services/unitService";

const unitService = new UnitService();

// Define the initial state using that type
const initialState: CombatUnitsState = {
  units: unitService.loadUnits(),
};

const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    addUnit: (state, action: PayloadAction<ICombatUnit>) => {
      state.units.push(action.payload);
      unitService.saveUnits(state.units);
    },
    removeUnit: (state, action: PayloadAction<number>) => {
      state.units.splice(action.payload, 1);
    },
  },
});

export const { addUnit, removeUnit } = unitSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUnits = (state: RootState) => state.units.units;
export default unitSlice.reducer;
