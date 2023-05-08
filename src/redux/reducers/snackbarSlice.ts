import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state of the 'snackbar' slice
type SnackbarState = {
  snackbarOpen: boolean;
  snackbarType: 'success' | 'error' | 'info' | 'warning';
  snackbarMessage: string;
  // duration: number;
};

// Define the initial state for the 'snackbar' slice
const initialState: SnackbarState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: '',
  // duration: 3000,
};

// Create a slice using the createSlice function from Redux Toolkit
const snackbarSlice = createSlice({
  name: 'snackbar', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define the 'setSnackbar' reducer
    setSnackbar: (_state: any, { payload }: PayloadAction<SnackbarState>) => {
      return {
        snackbarOpen: payload?.snackbarOpen, // Update the 'snackbarOpen' property of the state with the payload value
        snackbarType: payload?.snackbarType, // Update the 'snackbarType' property of the state with the payload value
        snackbarMessage: payload?.snackbarMessage, // Update the 'snackbarMessage' property of the state with the payload value
        // duration: payload?.duration, // Update the 'duration' property of the state with the payload value
      };
    },
  },
});

// Extract the reducer and actions from the snackbarSlice
const { reducer, actions } = snackbarSlice;

// Extract the 'setSnackbar' action from the snackbarSlice actions
export const { setSnackbar } = actions;

// Export the reducer as the default export of this module
export default reducer;
