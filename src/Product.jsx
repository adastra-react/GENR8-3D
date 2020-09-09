import React from 'react'
import './Product.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from "./StateProvider"

function Product({ id, title, price, rating, image }) {
    const [{}, dispatch] = useStateValue();


    const addToBasket = () => {
        //add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            {/* <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
            <div className="product-rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>

            <img className="product-img" src={image} />
            <button onClick={addToBasket}  >Add to cart</button> */}

            <div className="img-cont">
                <img className="product-img" src={image} alt=""/>
            </div>

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
            <button onClick={addToBasket}>Add to cart</button>
            {/*  */}
            </div>

            
            
        </div>
    )
}

export default Product
