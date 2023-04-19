import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//type defination
type messageState = {
  message: string;
};

//initial values
const initialState: messageState = {
  message: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state: any, { payload }: PayloadAction<messageState>) => {
      state.message = payload;
    },
    clearMessage: (state: any, { payload }: PayloadAction<messageState>) => {
      state.message = payload;
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions;
export default reducer;
