import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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

export const fetchUnits = createAsyncThunk("units/fetchUnits", async () => {
  const unitService = new UnitService();
  await unitService.loadUnits();
  return unitService.getUnits();
});

const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUnits.fulfilled,
        (state, action: PayloadAction<CombatUnit[]>) => {
          state.status = "succeeded";
          state.units = action.payload;
        }
      )
      .addCase(fetchUnits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch units";
      });
  },
});

export default unitSlice.reducer;
