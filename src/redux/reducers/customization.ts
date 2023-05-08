import config from '../constant';
import * as actionTypes from './actions';

// Define the type for the state of the 'customization' reducer
interface CustomizationState {
  isOpen: string[];
  fontFamily: string;
  borderRadius: string;
  opened: boolean;
}

// Define the initial state for the 'customization' reducer
export const initialState: CustomizationState = {
  isOpen: [],
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

// Define the 'customizationReducer' function, which handles the state updates for the 'customization' reducer
const customizationReducer = (state: CustomizationState = initialState, action: any) => {
  let id: string;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    default:
      return state;
  }
};

// Export the 'customizationReducer' as the default export of this module
export default customizationReducer;
