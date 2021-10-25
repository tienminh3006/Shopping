// import counterReducer from "../components/features/Counter/counterSlice";
import userReducer from "../containers/Authenticate/userSlice";
import cartReducer from "../containers/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};
// console.log(rootReducer.cart);
const store = configureStore({
  reducer: rootReducer,
});
export default store;
