import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const CartItem = ({ id, name, price }) => {
  const { removeGame } = useGlobalContext();

  return (
    <div>
      <div className="cart-item">
        <div className="cart-bar">
          <Link
            to={`/game/${id}`}
            style={{ textDecoration: "none", color: "#645757" }}>
            <div className="cart-bar">
              <h3>{name}</h3>
              <h3>${price}</h3>
            </div>
          </Link>
          <h5>
            <button
              className="remove-btn"
              type="button"
              onClick={() => {
                removeGame(id);
              }}>
              Remove
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
