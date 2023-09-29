import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTicket: {},
};
const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.currentTicket = action.payload;
    },
    clearTicket: () => {
      return { currentTicket: {} };
    },
  },
});
export const { setTicket, clearTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
