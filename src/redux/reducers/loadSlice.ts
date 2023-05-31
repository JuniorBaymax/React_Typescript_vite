import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state of the 'load' slice
type loadState = {
  loading: boolean;
};

// Define the initial state for the 'load' slice
const initialState: loadState = { loading: false };

// Create a slice using the createSlice function from Redux Toolkit
const loadSlice = createSlice({
  name: 'load', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define the 'enableLoading' reducer
    enableLoading: (state: loadState, { payload }: PayloadAction<any>) => {
      state.loading = payload.loading; // Update the 'loading' property of the state with the payload value
    },
  },
});

// Extract the reducer and actions from the loadSlice
const { reducer, actions } = loadSlice;

// Extract the 'enableLoading' action from the loadSlice actions
export const { enableLoading } = actions;

// Export the reducer as the default export of this module
export default reducer;
