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


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/contact">

          </Route>

        <Route path="/about">

        </Route>

        <Route path = "/login">
              <Login />
          </Route>
          
        <Route path = "/checkout">
              <ContactBanner/>
              <Header />
              <Checkout />
          </Route>

        <Route path = "/products">
              <ContactBanner/>
              <Header />
              <Products />
          </Route>

          <Route path = "/">
              <ContactBanner/>
              <Header />
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
