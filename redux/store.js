import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import historySlice from "./historySlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cartSlice,
  history: historySlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
