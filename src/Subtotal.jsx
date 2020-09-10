import React from 'react'
import './Subtotal.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.lenght} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input className="gift-input" type="checkbox"/> <p className="gift-text">this order contains a gift</p> 
                        </small>
                    </>
                )}
                value={getBasketTotal(basket)}
                decimalScale={2}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
             />
 
             <button className="checkout-btn">proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
