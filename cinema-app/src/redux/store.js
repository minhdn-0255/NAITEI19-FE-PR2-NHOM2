import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filmSlice from "./slices/filmSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const user = persistReducer(persistConfig, userSlice);
const film = persistReducer(persistConfig, filmSlice);
export const store = configureStore({
  reducer: {
    user,
    film,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
