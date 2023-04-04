// types
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  openItem: string[];
  openComponent: string;
  drawerOpen: boolean;
  componentDrawerOpen: boolean;
}

// initial state
const initialState: MenuState = {
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action: PayloadAction<{ openItem: string[] }>) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action: PayloadAction<{ openComponent: string }>) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action: PayloadAction<{ drawerOpen: boolean }>) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action: PayloadAction<{ componentDrawerOpen: boolean }>) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  },
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
