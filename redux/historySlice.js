import { createSlice } from "@reduxjs/toolkit";
const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      const { payload } = action;
      const { items, finalPrice , finalProfitPrice} = payload;
      state.push({
        id: Math.floor(Math.random() * 1000),
        items,
        finalPrice,
        finalProfitPrice,
        status: "در حال بررسی",
      });
    },
    resetHistory: (state) => {
      state.length = 0;
    },
  },
});

export const { addToHistory , resetHistory} = historySlice.actions;
export default historySlice.reducer;
