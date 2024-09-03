import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const GameCart = ({ id, name, price, image_url, genre, description }) => {
  const { AddGame } = useGlobalContext();
  return (
    <li key={id}>
      <Link
        to={`/game/${id}`}
        style={{ textDecoration: "none", color: "#645757" }}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="game-front">
              <img
                className="game-img"
                src={image_url}
                alt={name}
              />
            </div>

            <div className="game-back">
              <span className="price"> ${price}</span>
              <img
                src={image_url}
                alt={name}
              />

              <div>
                <h3>{name}</h3>
                <h5>{genre}</h5>
                <div className="game-description">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button
        className="add-btn"
        onClick={() => AddGame(id)}>
        Add to cart
      </button>
    </li>
  );
};

export default GameCart;
