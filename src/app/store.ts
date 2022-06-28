import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import formDataReducer from "../features/formData/formDataSlice";

export const store = configureStore({
  reducer: {
    form: formDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
