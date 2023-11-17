import React, { createContext, useContext, useEffect, useReducer } from 'react';
import TaskAdapter from '../../adapters/Task';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initialState = {
    user: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};