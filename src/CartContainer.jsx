import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart } = useGlobalContext();
  let totalPrice = 0;
  for (let game of cart) {
    totalPrice += game.price;
  }
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>your cart is empty...!</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="cart">
        <h1>Cart</h1>

        <ul>
          <li>
            {cart.map((game) => {
              return <CartItem {...game} />;
            })}
          </li>
        </ul>
        <div className="cart-total">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
