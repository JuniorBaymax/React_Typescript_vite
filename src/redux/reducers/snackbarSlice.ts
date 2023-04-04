import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { duration } from "moment";

// type
type SnackarState = {
  snackbarOpen: boolean;
  snackbarType: "success" | "error" | "info" | "warning";
  snackbarMessage: string;
  // duration: number;
};
const initialState: SnackarState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
  // duration: 3000,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar: (state: any, { payload }: PayloadAction<SnackarState>) => {
      return {
        snackbarOpen: payload?.snackbarOpen,
        snackbarType: payload?.snackbarType,
        snackbarMessage: payload?.snackbarMessage,
        // duration: payload?.duration,
      };
    },
  },
});

const { reducer, actions } = snackbarSlice;
export const { setSnackbar } = actions;
export default reducer;
