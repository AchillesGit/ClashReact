import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombatUnit } from "../models/combatUnit";
import { UnitService } from "../services/unitService";

interface UnitState {
  units: CombatUnit[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UnitState = {
  units: [],
  status: "idle",
  error: null,
};

const unitService = new UnitService();

export const loadUnits = () => (dispatch: any) => {
  dispatch(loadUnitsPending());
  try {
    unitService.loadUnits();
    const units = unitService.getUnits();
    dispatch(loadUnitsFulfilled(units));
  } catch (error: any) {
    dispatch(loadUnitsRejected(error.message));
  }
};

export const addUnit = (unit: CombatUnit) => (dispatch: any) => {
  unitService.addUnit(unit);
  const units = unitService.getUnits();
  dispatch(addUnitFulfilled(units));
};

const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    loadUnitsPending: (state) => {
      state.status = "loading";
    },
    loadUnitsFulfilled: (state, action: PayloadAction<CombatUnit[]>) => {
      state.status = "succeeded";
      state.units = action.payload;
    },
    loadUnitsRejected: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addUnitFulfilled: (state, action: PayloadAction<CombatUnit[]>) => {
      state.units = action.payload;
    },
  },
});

export const {
  loadUnitsPending,
  loadUnitsFulfilled,
  loadUnitsRejected,
  addUnitFulfilled,
} = unitSlice.actions;

export default unitSlice.reducer;
