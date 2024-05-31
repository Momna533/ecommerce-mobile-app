import CartItem from "./CartItem";
import { useEffect } from "react";
import { connect } from "react-redux";

const CartContainer = ({ total, cartItems, clearCart, getTotals, amount }) => {
  useEffect(() => {
    getTotals();
  }, [cartItems]);
  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <div className="header">
          <h2>your bag</h2>
          <h4 className="empty__cart">is currently empty</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      <div className="header">
        <h2>your bag</h2>
      </div>
      <div className="article">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <div className="footer">
        <hr />
        <div className="cart__total">
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button className="btn clear__btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.total,
    cartItems: state.cartItems,
    amount: state.amount,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTotals: () => dispatch({ type: "GET__TOTALS" }),
    clearCart: () => dispatch({ type: "CLEAR__CART" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

// import CartItem from "./CartItem";
// import { useGlobalContext } from "../context/Context";
// import { useEffect } from "react";

// const CartContainer = () => {
//   const { state, dispatch } = useGlobalContext();
//   useEffect(() => {
//     dispatch({ type: "GET_TOTALS" });
//   }, [state.cartItems, dispatch]);
//   if (state.cartItems.length === 0) {
//     return (
//       <div className="cart">
//         <div className="header">
//           <h2>your bag</h2>
//           <h4 className="empty__cart">is currently empty</h4>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="cart">
//       <div className="header">
//         <h2>your bag</h2>
//       </div>
//       <div className="article">
//         {state.cartItems.map((cartItem) => {
//           return <CartItem key={cartItem.id} {...cartItem} />;
//         })}
//       </div>
//       <div className="footer">
//         <hr />
//         <div className="cart__total">
//           <h4>
//             total <span>{state.total}</span>
//           </h4>
//         </div>
//         <button
//           className="btn clear__btn"
//           onClick={() => dispatch({ type: "CLEAR_CART" })}
//         >
//           clear cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartContainer;
