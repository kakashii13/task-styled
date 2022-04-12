import { useState } from "react";
import { useTaskContext } from "../context/Context";

const useTask = (id, text, description) => {
  const {
    taskList,
    setTaskList,
    state,
    setState,
    setOpenModal,
    tagList,
    setTagList,
  } = useTaskContext();

  const [openEdit, setOpenEdit] = useState(false);
  const [stateEdit, setStateEdit] = useState({ title: "", description: "" });

  const [openTag, setOpenTag] = useState(false);
  const [tagState, setTagState] = useState("");

  const index = taskList.findIndex((task) => task.id === id);
  const newTask = [...taskList];

  const onComplete = () => {
    newTask[index].complete = !newTask[index].complete;
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
      tags: "",
    });
    setTaskList(newTask);
  };

  const handleEnter = (key) => {
    if (key === "Enter" && state.title != "") {
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

  const handleTag = () => {
    const test = taskList.some((task) => task.id === id);
    if (test) {
      setOpenTag((prevState) => !prevState);
    }
  };

  const addTag = () => {
    const isTag = tagList.some((x) => x == tagState);
    if (tagState == "" || isTag) return;
    const newTagList = [...tagList];
    newTagList.push(tagState);
    setTagList(newTagList);
    setTagState("");
  };

  const selectTag = (tag, id) => {
    const taskIndex = taskList.findIndex((task) => task.id === id);
    newTask[taskIndex].tags = tag;
    setTaskList(newTask);
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
    openTag,
    setOpenTag,
    handleTag,
    addTag,
    setTagState,
    tagState,
    selectTag,
  };
};

export default useTask;
