import React from "react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { SHOP_DATA } from "./shop.data";
import "./shop.styles.scss";
import shop from "./shop.png";
import plus from "./plus-svgrepo-com.svg";
import minus from "./minus-svgrepo-com.svg";

const stripePromise = loadStripe("pk_test_QXna0K3iXrl6r7idSGw4i12b00Lzlybu6b");

const Shop = () => {
  let category = window.location.pathname.split("/")[2];
  console.log(category);
  const [stripeError, setStripeError] = useState();
  const [loading, setLoading] = useState();
  const [priceId, setPriceId] = useState([]);

  console.log(priceId);
  const removeFirst = (item, items) => {
    let found = false;
    let newItems = [];
    for (var i = 0; i < items.length; i++) {
      if (item !== items[i]) {
        newItems.push(item);
      } else {
        if (found === false) {
          found = true;
        } else {
          newItems.push(item);
        }
      }
    }
    return newItems;
  };
  const checkout = async (priceId) => {
    setLoading(true);
    const counts = {};

    for (var i=0; i<priceId.length; i++) {
      counts[priceId[i]] = counts[priceId[i]] ? counts[priceId[i]] + 1 : 1;
    }

    var lineItems = Object.keys(counts).map(ele=> ({price:ele, quantity:counts[ele]}))
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      shippingAddressCollection: { allowedCountries: ["US", "CA"] },
      mode: "payment",
      cancelUrl: window.location.origin,
      successUrl: "https://quiet-chaja-d2e83e.netlify.app/",
    });
    if (error) {
      setLoading(false);
      setStripeError(error);
    }
  };

  return (
    <div className="shop">
      <div className="shop-shop">
        <div className="shop-items">
          {Object.keys(SHOP_DATA).map((ele) =>
            SHOP_DATA[ele].map((elem) =>
              ele === category || category === "all" ? (
                <div
                  className="shop-item-container"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={"/images" + elem.imgUrl}
                  />
                  <div className="shop-item-info">
                    <div className="item-info">
                      {elem.title} / ${elem.price}
                    </div>
                  </div>
                  {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginBottom: "5px",
                      fontSize: "18px",
                    }}
                  >
                    <button
                      role="link"
                      onClick={() =>
                        setPriceId(removeFirst(elem.priceId, priceId))
                      }
                      disabled={loading}
                      className="add-to-cart"
                      style={{ width: "25%" }}
                    >
                      <img src={minus} />
                    </button>
                    <span style={{ padding: "4px" }}>
                      {priceId.filter((ele) => ele === elem.priceId).length}
                    </span>
                    <button
                      role="link"
                      onClick={() => {
                        setPriceId([...priceId, elem.priceId]);
                      }}
                      disabled={loading}
                      className="add-to-cart"
                      style={{ width: "25%" }}
                    >
                      <img src={plus} />
                    </button>
                  </div>
                  <button
                    role="link"
                    onClick={() => checkout([elem.priceId])}
                    disabled={loading}
                    className="add-to-cart"
                  >
                    Buy Now
                  </button>
                </div>
              ) : (
                ""
              )
            )
          )}
        </div>
        <div className="checkout-side">
          <div
            className="checkout-area"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "auto",
            }}
            onClick={() => checkout(priceId)}
          >
            <img src={shop} style={{ cursor: "pointer" }} width="40px" />
            <span style={{ fontSize: "11px" }}>Proceed to Checkout </span>
          </div>
          <div style={{ padding: "16px 0 0 10px" }} className="payment-text">
            Your payment info is not stored anywhere. The transaction is through{" "}
            <a href="https://www.stripe.com" target="_BLANK">
              Stripe
            </a>
            , a secure payment service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
