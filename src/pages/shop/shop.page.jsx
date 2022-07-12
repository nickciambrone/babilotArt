import React from "react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { SHOP_DATA } from "./shop.data";
import "./shop.styles.scss";
const stripePromise = loadStripe("pk_test_QXna0K3iXrl6r7idSGw4i12b00Lzlybu6b");

const Shop = () => {
  let category = window.location.pathname.split("/")[2];
  console.log(category);
  const [stripeError, setStripeError] = useState();
  const [loading, setLoading] = useState();

  const handleClick = async (priceId) => {
    setLoading(true);
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
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
      {category!=='all' ? SHOP_DATA[category].map((ele) => (
        <div className = 'shop-item-container' style={{display:'flex', flexDirection:'column'}}>
          <img style={{ width: "100%" }} src={"/images" + ele.imgUrl} />
          <div className = 'shop-item-info' style={{display:'flex', flexDirection:'row'}}>
            <div className = 'item-info' >{ele.title}  /  ${ele.price}</div>

          </div>
          {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
          <button
            role="link"
            onClick={() => handleClick(ele.priceId)}
            disabled={loading}
            className="buy-it-button"
          >
            Buy it
          </button>
        </div>
      )) : Object.keys(SHOP_DATA).map(ele=>SHOP_DATA[ele].map(elem=> <div className = 'shop-item-container' style={{display:'flex', flexDirection:'column'}}>
      <img style={{ width: "100%" }} src={"/images" + elem.imgUrl} />
      <div className = 'shop-item-info' style={{display:'flex', flexDirection:'row'}}>
        <div className = 'item-info' >{elem.title}  /  ${elem.price}</div>

      </div>
      {stripeError && <p style={{ color: "red" }}>{stripeError}</p>}
      <button
        role="link"
        onClick={() => handleClick(elem.priceId)}
        disabled={loading}
        className="buy-it-button"
      >
        Buy it
      </button>
    </div>))}
    </div>
  );
};

export default Shop;
