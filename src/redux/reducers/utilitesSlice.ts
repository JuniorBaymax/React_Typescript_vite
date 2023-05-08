import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import generateRandomId from '~/utils/generateRandomId';

// Define the type for the state of the 'utils' slice
type UtilState = {
  orderId: string;
  orderStatus: string;
  spare_id: string;
  payloadUpdater: string;
  sparePayloadUpdater: string;
  currentDay: string[];
  serviceWindow: {
    serviceWindowStartTime: string;
    serviceWindowEndTime: string;
  };
  slaDuration: {
    responseRemainingDuration: number;
    resolutionRemainingDuration: number;
  };
  ticketOnHold: number;
};

// Define the initial state for the 'utils' slice
const initialState: UtilState = {
  orderId: '',
  orderStatus: '',
  spare_id: '',
  payloadUpdater: '',
  sparePayloadUpdater: '',
  currentDay: [],
  serviceWindow: {
    serviceWindowStartTime: '',
    serviceWindowEndTime: '',
  },
  slaDuration: {
    responseRemainingDuration: 43200,
    resolutionRemainingDuration: 43200,
  },
  ticketOnHold: 0,
};

// Create a slice using the createSlice function from Redux Toolkit
const utilsSlice = createSlice({
  name: 'utils', // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Define the 'updatePayload' reducer
    updatePayload: (state: UtilState) => {
      state.payloadUpdater = generateRandomId(); // Update the 'payloadUpdater' property of the state with a random ID generated using the 'generateRandomId' utility function
    },
    // Define the 'updateSparePayload' reducer
    updateSparePayload: (state: UtilState) => {
      state.sparePayloadUpdater = generateRandomId(); // Update the 'sparePayloadUpdater' property of the state with a random ID generated using the 'generateRandomId' utility function
    },
    // Define the 'clearPayload' reducer
    clearPayload: (state: UtilState) => {
      state.payloadUpdater = ''; // Clear the 'payloadUpdater' property of the state
    },
    // Define the 'shareProps' reducer
    shareProps: (state: UtilState, { payload }: PayloadAction<UtilState>) => {
      state.orderId = payload.orderId; // Update the 'orderId' property of the state with the payload value
      state.orderStatus = payload.orderStatus; // Update the 'orderStatus' property of the state with the payload value
    },
    // Define the 'shareSlaProps' reducer
    shareSlaProps: (state: UtilState, { payload }: PayloadAction<UtilState>) => {
      state.currentDay = payload.currentDay; // Update the 'currentDay' property of the state with the payload value
      state.serviceWindow = payload.serviceWindow; // Update the 'serviceWindow' property of the state with the payload value
      state.slaDuration = payload.slaDuration; // Update the 'slaDuration' property of the state with the payload value
      state.ticketOnHold = payload.ticketOnHold; // Update the 'ticketOnHold' property of the state with the payload value
    },
  },
});

// Extract the reducer and actions from the utilsSlice
const { reducer, actions } = utilsSlice;

// Extract the 'updatePayload', 'clearPayload', 'updateSparePayload', 'shareProps', and 'shareSlaProps' actions from the utilsSlice actions
export const { updatePayload, clearPayload, updateSparePayload, shareProps, shareSlaProps } =
  actions;
export default reducer;
