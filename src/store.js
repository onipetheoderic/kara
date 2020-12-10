import React, { useState, createContext, useReducer } from "react";

// Create Context Object
const initialState = {
    currentTemplate:"agric",
    selectedCategory:"",
    cart: [],
    checkedB:true,
};
export const CounterContext = createContext(initialState);

export const CounterContextProvider = props => {


  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        
        case 'changeTemplate':
            return {...state, currentTemplate: action.payload.template};

        case 'changeCheckedB':
          return {...state, checkedB: action.payload}

        case 'setSelectedCategory':
            return {...state, selectedCategory: action.payload}

        case 'addToCart':
            return {...state, cart: action.payload}

        default:
            throw new Error();
        };
  },initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }} >
      {props.children}
    </CounterContext.Provider>
  );
};