import { createContext, useContext, useReducer } from "react";
import { dataReducer, initState } from "../Reducer/dataReducer";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initState);

  return (
    <dataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
