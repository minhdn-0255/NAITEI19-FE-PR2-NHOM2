import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/auth"
import messageReducer from "../redux/slices/message"
import filmSlice from "./slices/filmSlice";
const reducer = {
  auth: authReducer,
  message: messageReducer,
  film : filmSlice
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;
