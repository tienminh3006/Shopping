import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCard(state, action) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    increaseQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      state.cartItems[index].quantity = quantity + 1;
    },
    decreaseQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      state.cartItems[index].quantity = quantity - 1;
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      console.log(id, quantity);
      const index = state.cartItems.findIndex((x) => x.id === id);
      state.cartItems[index].quantity = quantity;
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idToRemove);
    },
    removeAllItems(state, action) {
      state.cartItems = [];
    },
    toggleCheckedItem(state, action) {
      const id = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      state.cartItems[index].checked = !state.cartItems[index].checked;
    },
    checkAllItem(state, action) {
      state.cartItems.map((item) => (item.checked = true));
    },
    uncheckAllItem(state, action) {
      state.cartItems.map((item) => (item.checked = false));
    },
  },
});

export const {
  removeAllItems,
  uncheckAllItem,
  checkAllItem,
  toggleCheckedItem,
  decreaseQuantity,
  increaseQuantity,
  showMiniCart,
  hideMiniCart,
  addToCard,
  setQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
