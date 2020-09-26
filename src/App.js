import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ContactBanner from "./ContactBanner"
import './App.css'
import Header from './Header'
import  Home from  './Home'
import Products from './Products'
import CheckoutProduct from './CheckoutProduct'
import Checkout from './Checkout'
import Login from './Login'
import { useState, useEffect } from "react";
import firebase from "./firebase";


function App() {
  const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

   const clearInputs = () => {
       setEmail('');
       SetPassword('');
   } 

   const clearErrors = () => {
       setEmailError('');
       setPasswordError('')
   }

   const handleLogin = () => {
       clearErrors();
        firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                    switch(err.code){
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError(err.message);
                            break;
                        case "auth/wrong-password":
                            setPasswordError(err.message);
                            break;
                    }
                })
            }

    const handleSignup = () => {
        clearErrors();
        firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .catch(err => {
                    switch(err.code){
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                        
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                    }
                })
            };

    const handleLogout = () => {
        firebase.auth().signOut();
    };

    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user)
            } else {
                setUser('');
            }
         })
      }

    useEffect(() => {
        authListener();
    }, [])
  return (
    <Router>
      <div className="app">
        {user? (
          <Switch>
          <Route path="/contact">
            <h1>contact</h1>
          </Route>

        <Route path="/about">
          <h1>About</h1>
        </Route>

       
          
        <Route path = "/checkout">
              <ContactBanner/>
              <Header handleLogout={handleLogout}/>
              <Checkout />
          </Route>

        <Route path = "/products">
              <ContactBanner/>
              <Header handleLogout={handleLogout}/>
              <Products />
          </Route>

          <Route path = "/">
              <ContactBanner/>
              <Header handleLogout={handleLogout} />
              <Home />
          </Route>
        </Switch>
        ) : (
          <Login email={email}
                     setEmail={setEmail} 
                     password={password} 
                     SetPassword={SetPassword}
                     handleLogin={handleLogin}
                     handleSignup={handleSignup}
                     hasAccount={hasAccount}
                     setHasAccount={setHasAccount}
                     emailError={setEmailError}
                     passwordError={setPasswordError}
                     />
        )}
        
      </div>
    </Router>
  )
}

export default App
