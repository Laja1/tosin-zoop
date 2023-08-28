import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default class Cart extends Component {
  render() {
    return (
      <div>
        {" "}
        <div class="cart-container">
          <div class="cart-number">5</div>
          <AiOutlineShoppingCart />
        </div>
      </div>
    );
  }
}
