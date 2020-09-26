import React from 'react';
import './Products.css';
import Product from './Product';
import Keychain from './images/keychain.png';

function Products() {
    return (
        <div className="products">
            <div className="main-text">
                <div>
                <h2>Our Products</h2>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, et
                <br/>
                Lorem ipsum dolor sit amet.
                </div>
            </div>

            <div className="product-area">
                <div className="product-area-row">
                        <Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />
 
<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />
                </div>

                <div className="product-area-row">
                <Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

                </div>

                <div className="product-area-row">
                <Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

<Product 
                        id='12524'
                        title="Keychain"
                        price={75}
                        rating={5}
                        image={Keychain}
                        />

                </div>
            </div>
        </div>
    )
}

export default Products;
