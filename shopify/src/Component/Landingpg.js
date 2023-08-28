import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Product from "./Product";
import { icons } from "react-icons";
import Brand from "./Brand";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import Wavify from "./Wavify";

export default class Landingpg extends Component {
  render() {
    return (
      <div>
        <h1 className="App" style={{ fontFamily: "'Helvetica Neue'" }}>
          Shopify <HiOutlineShoppingBag />
        </h1>
        <h4 className="center" style={{ color: "white" }}>
          choose your preferences
        </h4>
        <div className="center2">
          {" "}
          <Link to="/Product">
            <button class="button">Product</button>
          </Link>
          <Link to="/Brand">
            <button class="button">Brand</button>
          </Link>
          <Link to="/Gender">
            <button class="button">Gender</button>
          </Link>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Wavify />
      </div>
    );
  }
}
