//setup data layer
//we need this to track the basket

import { createContext, useContext, useReducer } from "react";
import React from 'react'


//this is a DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
    </StateContext.Provider>
    )

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)