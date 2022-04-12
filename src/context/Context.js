import React, { useState, createContext, useContext, useEffect } from "react";

const taskContext = createContext([]);

export const useTaskContext = () => useContext(taskContext);

const ContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [state, setState] = useState({ title: "", description: "" });
  const [tagList, setTagList] = useState([]);

  return (
    <taskContext.Provider
      value={{
        taskList,
        setTaskList,
        openModal,
        setOpenModal,
        state,
        setState,
        tagList,
        setTagList,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default ContextProvider;
