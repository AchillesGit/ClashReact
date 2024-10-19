import { configureStore } from "@reduxjs/toolkit";
import unitSlice from "./unitSlice";
import resourceSlice from "./resourceSlice";
import battleSlice from "./battleSlice";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = configureStore({
  reducer: {
    units: unitSlice,
    resources: resourceSlice,
    battle: battleSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
