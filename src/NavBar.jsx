import React, { useState } from "react";
import logo from "./logo.svg";
import { data, social } from "./data";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const NavBar = () => {
  const { cart } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const cartBtn = () => {};
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a
            href="./"
            className="logo">
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
          </a>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>

          <button
            className="toggle-btn"
            onClick={toggle}>
            ☰
          </button>
        </div>

        <div
          className={
            isOpen ? "links-container show-container" : "links-container"
          }>
          <ul className="links">
            {data.map((link) => {
              return (
                <div className="nav-center">
                  <li key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div>
          <ul className="social-links">
            {social.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cart-container">
          <Link to={"/CartContainer"}>
            <FaShoppingCart className="cart-icon" />
            <div className="amount-container">
              <span className="total-amount">{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
