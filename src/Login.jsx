import React from 'react'
import './Login.css'
import Logo from './images/white-logo-2.png'

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-logo">
                    <img className="logo" src={Logo} alt=""/>
                </div>
                <div className="login-info">
                    <h2 className="login-text">Login</h2>
                    <div className="email-input">
                        <h5>Email</h5>
                        <input className="input" type="text" name="email" id="" placeholder="Email"/>
                    </div>

                    <div className="password-input"> 
                        <h5>Password</h5>
                        <input className="input" type="password" name="password" placeholder="Password"/>
                    </div>

                    <button className="login-btn">Login</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login
