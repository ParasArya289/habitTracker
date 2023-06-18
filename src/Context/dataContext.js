import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer, initState } from "../Reducer/dataReducer";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState({});
  const [dataState, dispatchData] = useReducer(dataReducer, initState);

  return (
    <dataContext.Provider
      value={{
        dataState,
        dispatchData,
        showHabitModal,
        setShowHabitModal,
        selectedHabit,
        setSelectedHabit,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
