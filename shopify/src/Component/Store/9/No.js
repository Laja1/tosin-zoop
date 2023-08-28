import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Franchise from "./Franchise.jpg";

import Car from "./Car.js";
import "./No.css";
import { DummyData } from "./Data9";
import Data9 from "./Data9";
import { AiOutlineShoppingCart } from "react-icons/ai";

const No = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.item);

  // const addToCartHandler = () => {
  //   dispatch(cartActions.addToCart());
  // };

  return (
    <div className="Appp" style={{ backgroundColor: "#573232" }}>
      <div style={{ fontSize: "20px" }}>5</div>
      <br />
      <h1
        style={{
          justify: "flex",
          fontSize: "30px",
          marginBottom: "-40px",
          textAlign: "center",
          color: "white",
        }}
      >
        turndasix
        <div class="cart-container">
          <div class="cart-number">{cart}</div>
          <AiOutlineShoppingCart />
        </div>
      </h1>{" "}
      <br />
      {DummyData.map((item) => (
        <Car
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default No;
