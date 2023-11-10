/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [isSidebarOpen,SetIsSidebarOpen]=useState(false);
    const [isModalOpen,SetIsModalOpen]=useState(false)

    const openSideBar=()=>{
        SetIsSidebarOpen(true)
    }
    const closeSideBar=()=>{
        SetIsSidebarOpen(false)
    }

    const openModal=()=>{
        SetIsModalOpen(true)
    }
    const closeModal=()=>{
        SetIsModalOpen(false)
    }

    return <AppContext.Provider 
    value={
       {
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSideBar,
        closeSideBar,
        closeModal
       }

    }>{children}</AppContext.Provider>
}

export {AppContext,AppProvider}
