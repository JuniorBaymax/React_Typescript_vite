import { combineReducers } from '@reduxjs/toolkit';
import customizationReducer from './customization';
import snackbarReducer from './snackbarSlice';
import loadReducer from './loadSlice';
import messageReducer from './messageSlice';
import utilsReducer from './utilitesSlice';
import menuReducer from './menuSlice';

const rootReducer = combineReducers({
  load: loadReducer,
  snackbar: snackbarReducer,
  customization: customizationReducer,
  message: messageReducer,
  menu: menuReducer,
  utils: utilsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
