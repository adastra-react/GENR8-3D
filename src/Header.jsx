import React from 'react';
import './Header.css';
import Logo from './images/logo-2.png'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';

function Header({ handleLogout }) {
    const [{ basket }, dispatch] = useStateValue();
 
    return (
        <div className="header">

            <div className="logo-container">
                <Link to="/">
                  <img className="band-logo" src={Logo} alt=""/>
                </Link>

                <Link>
                    <div>
                        <h1></h1>
                    </div>
                </Link>
               
            </div>
            <div className="header-guest">
                <Link to={'/login'}> 
                    <div onClick={ {/* handleAuthentication */}} className='header-guest-option'>
                        
                    </div>
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
                    <h4 className="nav-link">About us</h4>
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

                <Link>
                <div>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
                </Link>
                

                
            </div>
        </div>
    )
}

export default Header;
