import { createContext, useContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

const DataContext = ({children})=> {
  // value = localStorage.getItem("dataResult")
  const [result, setResult] = useState(["asiiilt"]);

  useEffect(()=>{
    setResult(0);
  },[])
  return (
    <SidebarContext.Provider value={{ result, setResult }}>
      {children}
    </SidebarContext.Provider>
  );
}
export {
  DataContext, SidebarContext
}