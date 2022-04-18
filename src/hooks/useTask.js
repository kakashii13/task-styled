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
      tags: [],
    });
    setTaskList(newTask);
    setState({ title: "", description: "" });
  };

  const handleEnter = (key) => {
    if (key === "Enter" && state.title != "") {
      onAdd();
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

  const handleTag = (e) => {
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

  const selectTag = (tag, id, target) => {
    // filtro por cada id
    const taskIndex = taskList.findIndex((task) => task.id === id);
    // chequeo que el tag ya exista
    const filter = taskList
      .filter((task) => task.id === id)[0]
      .tags.includes(tag);
    // chequeo que no exista tag
    const filter1 =
      taskList.filter((task) => task.id === id)[0].tags.length == 0;

    // if (!filter1) return;
    if (target.checked == false) return;

    if (filter1) {
      newTask[taskIndex].tags.push(tag);
      setTaskList(newTask);
    } else {
      if (!filter) {
        newTask[taskIndex].tags.push(tag);
        setTaskList(newTask);
      } else return;
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