import React from 'react';
import './Header.css';
import Logo from './images/logo.png'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
 
    return (
        <div className="header">

            <div className="logo-container">
                <Link>
                  <img className="band-logo" src={Logo} alt=""/>
                </Link>
               
            </div>
            

            <div className="nav">
                <Link className="nav-links" to="/">
                    <h4 className="nav-link active">Home</h4>
                </Link>

                <Link className="nav-links" to="/products">
                    <h4 className="nav-link" >Products</h4>
                </Link>

                <Link className="nav-links">
                    <h4 className="nav-link">About Us</h4>
                </Link>

                <Link className="nav-links">
                    <h4 className="nav-link">Blog</h4>
                </Link>

                <Link className="nav-links">
                    <h4 className="nav-link">Contact</h4>
                </Link>

                <Link className="header-cart-link" to="/checkout">
                    <div className="header-cart">
                        <AddShoppingCartIcon className="cart-icon"/>
                        <span className="cart-number">{basket?.length}</span>
                    </div>
                </Link>

                
            </div>
        </div>
    )
}

export default Header;
