import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store";

import classes from "./CartButton.module.css"; // You can create a separate CSS file for the cart item styles

const CartItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const carts = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        quantity: props.quantity,
      })
    );
  };

  return (
    <div className="Appp" style={{ backgroundColor: "#573232" }}>
      <button className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{cart}</span>
      </button>
      <div class="container d-flex justify-content-center mt-55 mb-10">
        <div class="row">
          <div className="col-md-3 mt-2">
            <div className="card">
              <h1>{cart}</h1>
              <div className="card-body">
                <div className="card-img-actions">
                  <img
                    src={props.image}
                    className="card-img img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    <a href="#" className="text-default mb-2" data-abc="true">
                      {props.title}
                    </a>
                  </h6>
                </div>

                <h3 className="mb-0 font-weight-semibold">{props.price}</h3>

                <div>
                  <i className="fa fa-star star"></i>
                  <i className="fa fa-star star"></i>
                  <i className="fa fa-star star"></i>
                  <i className="fa fa-star star"></i>
                </div>

                <button
                  type="button"
                  onClick={addToCartHandler}
                  className="btn btn-cart"
                >
                  +
                </button>
                <button type="button" className="btn btn-cart">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
