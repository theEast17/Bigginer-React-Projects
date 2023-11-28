import React, { useCallback, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const fetchdrinks = useCallback( async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data; //we are fetching the drinks from data You can console get the output
      if (drinks) {
        const newCockTails = drinks.map((items) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = items;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCockTails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  },[searchTerm]);
  useEffect(() => {
    fetchdrinks();
  }, [searchTerm,fetchdrinks]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
