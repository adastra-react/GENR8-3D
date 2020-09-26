import React from 'react';
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";



function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="basket-state">
                {basket?.length === 0 ? (
                   <div className="cart-notify">
                     <h2>Your shopping cart is empty</h2>
                     <p>You have no items in your cart. to purchase a product, click/tap "Add to cart" in an item card
                     </p>
                   </div>
               ):(
                   <div>
                       <h2 className="cart-notify">Your shopping basket🛒</h2>
                    <div className="checkout-sub">
                    <div>
                    {basket?.map((item) => (
                           <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                             />
                       ))}
                    </div>

                    <div className="subtotal-cont">
                            {basket.length > 0 && (
                        <div className="subtotal-box">
                            <Subtotal />
                        </div>
                        )}    
                    </div>
                    </div> 
                   </div>
               )}
            </div>            
        </div>
    )
}

export default Checkout;
