import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the MenuState
interface MenuState {
  openItem: string[];
  openComponent: string;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
}

// Define the initial state for the MenuState
const initialState: MenuState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
};

// Create a slice using the createSlice function from Redux Toolkit
const menu = createSlice({
  name: 'menu', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define the 'activeItem' reducer
    activeItem: (state, action: PayloadAction<{ openItem: string[] }>) => {
      state.openItem = action.payload.openItem; // Update the 'openItem' property of the state with the payload value
    },

    // Define the 'activeComponent' reducer
    activeComponent: (state, action: PayloadAction<{ openComponent: string }>) => {
      state.openComponent = action.payload.openComponent; // Update the 'openComponent' property of the state with the payload value
    },

    // Define the 'openDrawer' reducer
    openDrawer: (state, action: PayloadAction<{ drawerOpen: boolean }>) => {
      state.drawerOpen = action.payload.drawerOpen; // Update the 'drawerOpen' property of the state with the payload value
    },

    // Define the 'openComponentDrawer' reducer
    openComponentDrawer: (state, action: PayloadAction<{ componentDrawerOpen: boolean }>) => {
      state.componentDrawerOpen = action.payload.componentDrawerOpen; // Update the 'componentDrawerOpen' property of the state with the payload value
    },
  },
});

// Export the reducer as the default export of this module
export default menu.reducer;

// Extract the actions from the menu slice
export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
