import React, { useState, createContext, useReducer } from "react";

// Create Context Object
const initialState = {
    currentTemplate:"agric",
};
export const CounterContext = createContext(initialState);

export const CounterContextProvider = props => {


  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        
        case 'changeTemplate':
            return {...state, currentTemplate: action.payload.template}
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