import React from 'react';
import './Login.css';
import Logo from './images/white-logo-2.png';
import { Link } from "react-router-dom";


function Login({ email, setEmail, password, SetPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError }) {
    
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
                        <input className="input" 
                               type="text" 
                               name="email" 
                               id="" 
                               autoFocus 
                               required 
                               placeholder="Email"
                               value={email} 
                               onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className="err-mssg">{emailError}</p>
                    </div>

                    <div className="password-input"> 
                        <h5>Password</h5>
                        <input className="input" 
                               type="password" 
                               name="password" 
                               autoFocus 
                               required 
                               placeholder="Password" 
                               value={password}
                               onChange={(e) => SetPassword(e.target.value)}
                               />
                               <p className="err-mssg">{passwordError}</p>
                    </div>
                    <div className="button-cont">
                        {hasAccount ? (
                                <div className="btn-cont">
                                    <button onClick={handleLogin} className="login-btn">Sign in</button>
                                    <p>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)}><strong>Sign up</strong></span></p>
                                </div>
                                
                             
                        ) : (
                                <div className="btn-cont">
                                     <button onClick={handleSignup} className="login-btn">Sign up</button>
                                     <p>Already have an account?<span onClick={() => setHasAccount(!hasAccount)}><strong>Sign in</strong></span></p>
                                </div>
                               
                            
                        )}    
                    </div>

                    
                </div>
            </div>
            
        </div>
    )
}

export default Login;
