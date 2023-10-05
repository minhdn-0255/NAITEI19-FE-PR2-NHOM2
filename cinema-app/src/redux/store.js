import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filmSlice from "./slices/filmSlice";
import ticketSlice from "./slices/ticketSlice";
import orderSlice from "./slices/orderSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const user = persistReducer(persistConfig, userSlice);
const film = persistReducer(persistConfig, filmSlice);
const ticket = persistReducer(persistConfig, ticketSlice);
const order = persistReducer(persistConfig, orderSlice);
export const store = configureStore({
  reducer: {
    user,
    film,
    ticket,
    order,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
