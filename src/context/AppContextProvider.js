import React, {useReducer} from 'react';
import AppContext from "../store/app-context";
import reducer, {initialState} from "../reducer";

const AppContextProvider = ({children}) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;