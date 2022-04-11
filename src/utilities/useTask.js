import { useState } from "react";
import { useTaskContext } from "../context/Context";

const useTask = (id, text) => {
  const { taskList, setTaskList, state, setState, setOpenModal } =
    useTaskContext();

  const [openEdit, setOpenEdit] = useState(false);
  const [stateEdit, setStateEdit] = useState("");

  const index = taskList.findIndex((task) => task.id === id);
  const newTask = [...taskList];

  const onComplete = () => {
    newTask[index].complete = true;
    setTaskList(newTask);
  };

  const onDelete = () => {
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  const onAdd = (text) => {
    const newDate = new Date();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const taskID = taskList.length + 1;
    newTask.push({
      id: taskID,
      text: text,
      complete: false,
      date: `${day}-${month}`,
    });
    setTaskList(newTask);
  };

  const handleEnter = (key) => {
    if (key === "Enter") {
      onAdd(state);
      setState("");
    }
  };
  const onEdit = () => {
    const test = taskList.some((task) => task.id === id);
    if (test) {
      setOpenEdit(true);
      setOpenModal(false);
      setStateEdit(text);
    }
  };

  return {
    onAdd,
    onDelete,
    onComplete,
    handleEnter,
    state,
    setState,
    onEdit,
    openEdit,
    setOpenEdit,
    stateEdit,
    setStateEdit,
  };
};

export default useTask;
