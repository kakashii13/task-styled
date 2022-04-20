import { useState } from "react";
import { useTaskContext } from "../context/Context";

const useTask = (id, title, description) => {
  const { state, setState, setOpenModal, taskList, setTaskList, setComplete } =
    useTaskContext();
  const [openEdit, setOpenEdit] = useState(false);
  const [stateEdit, setStateEdit] = useState({ title: "", description: "" });

  const index = taskList.findIndex((task) => task.id === id);
  const newTask = [...taskList];

  const onComplete = () => {
    newTask[index].complete = !newTask[index].complete;
    setTaskList(newTask);
    if (newTask[index].complete == true) {
      setComplete(true);
    }
    setTimeout(() => {
      setComplete(false);
    }, 2000);
  };

  const onDelete = () => {
    newTask.splice(index, 1);
    setTaskList(newTask);
  };

  const onAdd = () => {
    const taskID = new Date().getSeconds();
    newTask.push({
      id: taskID,
      title: state.title,
      description: state.description,
      complete: false,
      tags: [],
    });
    setTaskList(newTask);
    setState({ title: "", description: "" });
  };

  const handleEnter = (key) => {
    if (key === "Enter" && state.title !== "") {
      onAdd();
    }
  };

  const onEdit = () => {
    const test = taskList.some((task) => task.id === id);
    if (test) {
      setOpenEdit(true);
      setOpenModal(false);
      setStateEdit({
        title,
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
    taskList,
  };
};

export default useTask;
