import React from 'react';
import { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(
    'pk_live_3AFOaBJhRRYDIeUjNcAKPjZV006D7xNPLb'
)

const Shop = () =>{
    const [stripeError, setStripeError]=useState();
    const [loading, setLoading]=useState();

    const handleClick = async () =>{
        setLoading(true);
        const stripe = await stripePromise;
        const {error} = await stripe.redirectToCheckout({
            lineItems:[{
                price:'price_1LKnCXGBGKe5K8ugFRnwwEj8',
                quantity:1
            }],
            mode:'payment',
            cancelUrl:window.location.origin,
            successUrl:'https://quiet-chaja-d2e83e.netlify.app/'
        });
        if(error){
            setLoading(false);
            setStripeError(error);
        }
    };

    return (
        <div className = 'shop'>
        {stripeError && <p style={{color:'red'}}>{stripeError}</p>}
        <button role = 'link' onClick={handleClick} disabled={loading}>
            Go to checkout
        </button>
        </div>
    )
}

export default Shop