import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext();
const NowJobContext = createContext();

const DataContext = ({ children }) => {
  const [result, setResult] = useState(["asiiilt"]);
  const [nowJob, setNowJob] = useState("");
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let result = localStorage.getItem('result');
      let nowJob = localStorage.getItem('nobJob');
      setResult(result);
      setNowJob(nowJob);
    }
  }, []);
  return (
    <SidebarContext.Provider value={{ result, setResult }}>
      <NowJobContext.Provider value={{ nowJob, setNowJob }}>
        {children}
      </NowJobContext.Provider>
    </SidebarContext.Provider>
  );
};
export { DataContext, SidebarContext,NowJobContext };
