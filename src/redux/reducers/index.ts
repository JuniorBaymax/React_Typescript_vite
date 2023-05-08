// Import the necessary functions and reducers from Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Import individual reducers from their respective files
import customizationReducer from './customization';
import snackbarReducer from './snackbarSlice';
import loadReducer from './loadSlice';
import messageReducer from './messageSlice';
import utilsReducer from './utilitesSlice';
import menuReducer from './menuSlice';

// Combine the individual reducers into a single root reducer
const rootReducer = combineReducers({
  load: loadReducer,
  snackbar: snackbarReducer,
  customization: customizationReducer,
  message: messageReducer,
  menu: menuReducer,
  utils: utilsReducer,
});

// Define the type of the root state based on the return type of the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Export the root reducer as the default export of this module
export default rootReducer;
