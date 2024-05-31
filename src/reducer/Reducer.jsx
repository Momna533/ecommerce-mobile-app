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
          const decreaseAmount = item.amount - 1;
          if (decreaseAmount < 1) {
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
  if (action.type === "GET_TOTALS") {
    let { totalAmount, totalPrice } = state.cartItems.reduce(
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
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [] };
  }
  if (action.type === "REMOVE") {
    const id = action.payload;
    const tempCart = state.cartItems.filter((item) => {
      return item.id !== id;
    });
    return { ...state, cartItems: tempCart };
  }
  return state;
};
export default reducer;
export { initialState };

// import data from "../data";
// const initialState = {
//   cartItems: data,
//   amount: 0,
//   total: 0,
// };

// const reducer = (state = initialState, action) => {
//   if (action.type === "INCREASE") {
//     const id = action.payload;
//     const tempCart = state.cartItems.map((item) => {
//       if (item.id === id) {
//         return { ...item, amount: item.amount + 1 };
//       }
//       return item;
//     });
//     return { ...state, cartItems: tempCart };
//   }
//   if (action.type === "DECREASE") {
//     const id = action.payload;
//     const tempCart = state.cartItems
//       .map((item) => {
//         if (item.id === id) {
//           const decreaseAmount = item.amount - 1;
//           if (decreaseAmount < 1) {
//             return null;
//           } else {
//             return { ...item, amount: item.amount - 1 };
//           }
//         }
//         return item;
//       })
//       .filter((item) => item !== null);
//     return { ...state, cartItems: tempCart };
//   }
//   if (action.type === "GET_TOTALS") {
//     let { totalAmount, totalPrice } = state.cartItems.reduce(
//       (acc, item) => {
//         let finalPrice = item.price * item.amount;
//         acc.totalPrice += finalPrice;
//         acc.totalAmount += item.amount;
//         return acc;
//       },
//       { totalAmount: 0, totalPrice: 0 }
//     );
//     const finalPrice = totalPrice.toFixed(2);
//     return { ...state, amount: totalAmount, total: finalPrice };
//   }
//   if (action.type === "CLEAR_CART") {
//     return { ...state, cartItems: [] };
//   }
//   if (action.type === "REMOVE") {
//     const id = action.payload;
//     const tempCart = state.cartItems.filter((item) => {
//       return item.id !== id;
//     });
//     return { ...state, cartItems: tempCart };
//   }
//   return state;
// };
// export default reducer;
// export { initialState };
