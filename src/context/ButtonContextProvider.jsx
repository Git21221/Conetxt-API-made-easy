import React, { useState } from "react";
import buttonContext from './buttonContext'
const ButtonContextProvider = ({ children }) => {

  const[count, setCount] = useState(0);
  return (
  <buttonContext.Provider value={{count, setCount}}>
    {children}
  </buttonContext.Provider>
  )
};

export default ButtonContextProvider;
