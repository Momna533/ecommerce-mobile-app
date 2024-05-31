// import { createStore } from "redux";
// const initialState = {
//   count: 0,
// };
// const reducer = (state = initialState, action) => {
//   if (action.type === "INCREASE") {
//     // console.log("increase");
//   }
//   return state;
// };

// const store = createStore(reducer);
// export default store;
import { createStore } from "redux";
import data from "../data";

const initialState = {
  cartItems: data,
  amount: 0,
  total: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREASE") {
    const id = action.payload;
    const tempCart = state.cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cartItems: tempCart };
  }
  if (action.type === "DECREASE") {
    const id = action.payload;
    const tempCart = state.cartItems
      .map((item) => {
        if (item.id === id) {
          const itemAmount = item.amount - 1;
          if (itemAmount < 1) {
            return null;
          } else {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item !== null);
    return { ...state, cartItems: tempCart };
  }
  if (action.type === "GET__TOTALS") {
    let { totalPrice, totalAmount } = state.cartItems.reduce(
      (acc, item) => {
        let finalPrice = item.price * item.amount;
        acc.totalPrice += finalPrice;
        acc.totalAmount += item.amount;
        return acc;
      },
      { totalAmount: 0, totalPrice: 0 }
    );
    const finalPrice = totalPrice.toFixed(2);
    return { ...state, amount: totalAmount, total: finalPrice };
  }
  if (action.type === "CLEAR__CART") {
    return { ...state, cartItems: [] };
  }
  return state;
};

const store = createStore(reducer);

export default store;
