import React, { useState, createContext, useContext, useEffect } from "react";

const taskContext = createContext([]);

export const useTaskContext = () => useContext(taskContext);

const ContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  return (
    <taskContext.Provider
      value={{
        taskList,
        setTaskList,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default ContextProvider;
