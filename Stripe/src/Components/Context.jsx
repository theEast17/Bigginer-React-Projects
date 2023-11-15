/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React, { useState, useContext } from "react";
import sublinks from "./Data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, SetIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, SetIsSubMenuOpen] = useState(false);
  const [location,setLocation]=useState({})
  const [page,setPage]=useState({page:'',links:[]})

  const sidebarOpen = () => {
    SetIsSideBarOpen(true);
  };
  const sidebarClose = () => {
    SetIsSideBarOpen(false);
  };

  const subMenuOpen = (text,coorditates) => {
    const page=sublinks.find((link)=>link.page===text)
    setPage(page)
    setLocation(coorditates)
    SetIsSubMenuOpen(true);
  };
  const subMenuClose = () => {
    SetIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        sidebarOpen,
        sidebarClose,
        subMenuOpen,
        subMenuClose,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
