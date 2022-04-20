import React, { useState, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const taskContext = createContext([]);

export const useTaskContext = () => useContext(taskContext);

const ContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [state, setState] = useState({ title: "", description: "" });
  const { item: taskList, saveItem: setTaskList } = useLocalStorage(
    "Tasks",
    []
  );

  const [isComplete, setComplete] = useState(false);

  const { item: tagList, saveItem: setTagList } = useLocalStorage("Tags", []);

  return (
    <taskContext.Provider
      value={{
        openModal,
        setOpenModal,
        state,
        setState,
        tagList,
        setTagList,
        taskList,
        setTaskList,
        isComplete,
        setComplete,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default ContextProvider;
