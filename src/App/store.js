// import counterReducer from "../components/features/Counter/counterSlice";
import userReducer from "../components/features/Authenticate/userSlice";
import cartReducer from "../components/features/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
