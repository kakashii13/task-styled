import React, { useState, createContext, useContext } from "react";

const taskContext = createContext([]);

export const useTaskContext = () => useContext(taskContext);

const ContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [state, setState] = useState({ title: "", description: "" });
  const [tagList, setTagList] = useState([]);
  const [openTag, setOpenTag] = useState(false);

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
        setOpenTag,
        openTag,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default ContextProvider;
