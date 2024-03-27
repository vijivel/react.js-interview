
import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  data: 'Some initial data'
};


const StateContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        state,data: action.payload
      };
    default:
      return state;
  }
};


export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};


export const useStateValue = () => useContext(StateContext);
