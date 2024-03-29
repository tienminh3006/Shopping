import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => {
  // console.log(state);
  return state.cart.cartItems;
};

// console.log(cartItemsSelector);

export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => {
    // console.log(cartItems);
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }
);
// console.log(cartItemsCountSelector);
export const cartTotaltSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems
      .filter((x) => x.checked === true)
      .reduce(
        (count, item) => count + item.product.salePrice * item.quantity,
        0
      )
);
export const cartTotalChecked = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.length
);
export const cartTotal = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.filter((x) => x.checked === true).length
);
