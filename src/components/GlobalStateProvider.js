'use client'
// GlobalStateContext.js
import { createContext, useContext, useState } from 'react';

import React from 'react'
const GlobalStateContext = createContext();

const GlobalStateProvider = ({children}) => {
  const [Qstate, setQState] = useState(false);
  const [Pstate, setPState] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ Qstate,setQState,Pstate,setPState,isOpenMenu,setIsOpenMenu }}>
      {children}
      {/* <ToastContainer/> */}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;
export const useGlobalState = () => useContext(GlobalStateContext);
