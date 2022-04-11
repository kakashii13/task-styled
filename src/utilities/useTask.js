import { useState } from "react";
import { useTaskContext } from "../context/Context";

const useTask = (id, text, description) => {
  const { taskList, setTaskList, state, setState, setOpenModal } =
    useTaskContext();

  const [openEdit, setOpenEdit] = useState(false);
  const [stateEdit, setStateEdit] = useState({ title: "", description: "" });

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

  const onAdd = () => {
    const taskID = taskList.length + 1;
    newTask.push({
      id: taskID,
      title: state.title,
      description: state.description,
      complete: false,
    });
    setTaskList(newTask);
  };

  const handleEnter = (key) => {
    if (key === "Enter") {
      onAdd();
      setState({ title: "", description: "" });
    }
  };
  const onEdit = () => {
    const test = taskList.some((task) => task.id === id);
    if (test) {
      setOpenEdit(true);
      setOpenModal(false);
      setStateEdit({
        title: text,
        description,
      });
    }
  };

  const handleEdit = () => {
    const taskIndex = taskList.findIndex((task) => task.id === id);
    newTask[taskIndex].title = stateEdit.title;
    newTask[taskIndex].description = stateEdit.description;
    setTaskList(newTask);
    setOpenEdit(false);
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
    handleEdit,
  };
};

export default useTask;
