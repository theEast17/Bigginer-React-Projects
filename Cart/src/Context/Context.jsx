import React from "react";
import { useContext, useReducer, useEffect } from "react";
// import cartDetails from "../Data/Data";
import Reducer from "./Reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialValue = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payLoad: cart });
  };
  useEffect(() => {
    fetchData();
  }, []);


  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payLoad: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payLoad: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payLoad: id });
  };
 

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };
