import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "../Reducer/appReducer";
import { json } from "react-router-dom";

export const AppContext = createContext();

const AppContextWrapper = ({ children }) => {
   let localState = localStorage.getItem("AppState");
   let initialStateValue = localStorage ? JSON.parse(localState) : initialState;

   const [state, dispatch] = useReducer(reducer, initialStateValue);

   const contextValue = { state, dispatch };
   useEffect(() => {
      localStorage.setItem("AppState", JSON.stringify(state));
   }, [state]);

   return (
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
   );
};

export default AppContextWrapper;
