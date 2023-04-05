import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import generateRandomId from '~/utils/generateRandomId';

// type defination
type utilState = {
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
const initialState: utilState = {
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

const utilisSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    updatePayload: (state: any) => {
      state.payloadUpdater = generateRandomId();
    },
    updateSparePayload: (state: any) => {
      state.sparePayloadUpdater = generateRandomId();
    },
    clearPayload: (state: any) => {
      state.payloadUpdater = '';
    },
    shareProps: (state: any, { payload }: PayloadAction<utilState>) => {
      state.orderId = payload.orderId;
      state.orderStatus = payload.orderStatus;
    },
    shareSlaProps: (state: utilState, { payload }: PayloadAction<utilState>) => {
      state.currentDay = payload.currentDay;
      state.serviceWindow = payload.serviceWindow;
      state.slaDuration = payload.slaDuration;
      state.ticketOnHold = payload.ticketOnHold;
    },
  },
});

const { reducer, actions } = utilisSlice;

export const { updatePayload, clearPayload, updateSparePayload, shareProps, shareSlaProps } =
  actions;
export default reducer;
