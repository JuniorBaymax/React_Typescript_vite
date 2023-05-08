import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state of the 'message' slice
type messageState = {
  message: string;
};

// Define the initial state for the 'message' slice
const initialState: messageState = {
  message: '',
};

// Create a slice using the createSlice function from Redux Toolkit
const messageSlice = createSlice({
  name: 'message', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define the 'setMessage' reducer
    setMessage: (state: messageState, { payload }: PayloadAction<messageState>) => {
      state.message = payload.message; // Update the 'message' property of the state with the payload value
    },
    // Define the 'clearMessage' reducer
    clearMessage: (state: messageState, { payload }: PayloadAction<messageState>) => {
      state.message = payload.message; // Update the 'message' property of the state with the payload value
    },
  },
});

// Extract the reducer and actions from the messageSlice
const { reducer, actions } = messageSlice;

// Extract the 'setMessage' and 'clearMessage' actions from the messageSlice actions
export const { setMessage, clearMessage } = actions;

// Export the reducer as the default export of this module
export default reducer;
