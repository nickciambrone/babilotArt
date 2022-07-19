import React from "react";
import { useState , useEffect} from "react";
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
  const [all, setAll] = useState(false);
  const [priceId, setPriceId] = useState(
    () =>
      JSON.parse(localStorage.getItem("priceId")) || [
      ]
  );

  useEffect(() => {
    window.localStorage.setItem('priceId', JSON.stringify(priceId));
  }, [priceId]);




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

    for (var i = 0; i < priceId.length; i++) {
      counts[priceId[i]] = counts[priceId[i]] ? counts[priceId[i]] + 1 : 1;
    }

    var lineItems = Object.keys(counts).map((ele) => ({
      price: ele,
      quantity: counts[ele],
    }));
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
        <div style={{display:'flex', flexDirection:'column'}} className = 'left-shop-container'>
          <div className="shop-items" style={{marginBottom:'20px'}}>
            {Object.keys(SHOP_DATA).map((ele) =>
              SHOP_DATA[ele].map((elem, ind) =>
                (ele === category || category === "all") &&
                (all === true || ind < 8) ? (
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
                    {stripeError && (
                      <p style={{ color: "red" }}>{stripeError}</p>
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginBottom: "5px",
                        fontSize: "18px",
                      }}
                    >
                      <div
                        role="link"
                        disabled={loading}
                        className="add-to-cart"
                        style={{ width: "25%" }}
                      >
                        <img
                          src={minus}
                          style={{ cursor: "pointer" }}
                          width="30px"
                          onClick={() =>
                            setPriceId(removeFirst(elem.priceId, priceId))
                          }
                        />
                      </div>
                      <span>
                        {priceId.filter((ele) => ele === elem.priceId).length}
                      </span>
                      <div
                        role="link"
                        disabled={loading}
                        className="add-to-cart"
                        style={{ width: "25%" }}
                      >
                        <img
                          src={plus}
                          width="30px"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setPriceId([...priceId, elem.priceId]);
                          }}
                        />
                      </div>
                    </div>
                    <button
                      role="link"
                      onClick={() => checkout([elem.priceId])}
                      disabled={loading}
                      className="buy-now"
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
          {!all ?    <span className="see-all" style={{cursor:'pointer', width:'140px', margin:'auto'}} onClick={() => setAll(true)}>
          See All Results
        </span> :<span className="see-all" style={{cursor:'pointer', width:'140px', margin:'auto'}} onClick={() => setAll(false)}>
        See Less Results
      </span>}
       
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
