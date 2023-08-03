import { createSlice } from "@reduxjs/toolkit";
// {id:1,name:'amir'}
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      //payload => {id: name: price: count:}
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.push({ ...action.payload, count: 1 });
      } else {
        state[index].count = state[index].count + 1;
      }
    },
    decrement: (state, action) => {
      //payload => 1
      const index = state.findIndex((item) => item.id === action.payload);
      if (state[index].count === 1) {
        state.splice(index, 1);
      } else {
        state[index].count = state[index].count - 1;
      }
    },
    removeItem: (state, action) => {
      //payload => id
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    reset: (state) => {
      state.length = 0;
    },
  },
});

export const { add, decrement, removeItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
