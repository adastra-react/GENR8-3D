import React from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removerFromBasket = () => {
        dispatch({
            type:"REMOVE_ITEM_FROM_BASKET",
            id: id,
        })
        
    }
    
    return (
        <div className="checkout-product">
            <div className="img-cont">
                <img className="product-img" src={image} alt=""/>
            </div>

            <div className="info-body">
                <div className="info">
                    <h2>{title}</h2>
                </div>

                <div className="product-price">
                    <h2>${price}</h2>
                </div>

                <div className="product-rating">
                    {
                        Array(rating)
                        .fill()
                         .map((_) => (
                            <StarBorderIcon/>
                        ))
                    }
                </div>

                <div className="add-cart-btn">
                <button onClick={removerFromBasket}>Remove from cart</button>
                {/*  */}
                </div>
            </div>

            
        </div>
    )
}

export default CheckoutProduct;
