import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext({
  sidebarExtend: false
});

export const AppProvider = ({ children }) => {
  const [sidebarExtend, setSidebarExtend] = useState(false);

  const values = {
    sidebarExtend,
    setSidebarExtend,
  }
  
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContext;