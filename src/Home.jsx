import React from 'react'
import './Home.css'
import { Link } from '@material-ui/core'

function Home() {
    return (
        <div className="home">
            <div className="home-txt">
                <h1 className="main-txt">Shop Now</h1>
                <p className="sec-text">Lorem ipsum dolor  Lorem ipsum dolor
                 sit amet consectetur adipisicing elit. Maiores, adipisci.
                <br/>
                <span>Lorem ipsum dolor sit amet.</span>
                </p>
                
                <div>
                    <Link to="/products">
                    <button className="btn">SHOP NOW</button>
                    </Link>
                    
                    {/* <button></button> */}
                </div>
             
                
            </div>
        </div>
    )
}

export default Home
