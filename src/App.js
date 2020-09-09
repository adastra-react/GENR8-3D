import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ContactBanner from "./ContactBanner"
import './App.css'
import Header from './Header'
import  Home from  './Home'
import Products from './Products'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckoutProduct from './CheckoutProduct'
import Checkout from './Checkout'


library.add(fab, faCheckSquare, faCoffee, faFacebookF)


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
