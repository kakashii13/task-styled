import { useState } from "react";
import { useTaskContext } from "../context/Context";

export const useTag = (id) => {
  const { taskList, setTaskList, tagList, setTagList } = useTaskContext();
  const [tagState, setTagState] = useState("");

  const [openTag, setOpenTag] = useState(false);
  const newTask = [...taskList];

  const handleTag = () => {
    const test = taskList.filter((task) => task.id === id);
    if (test) {
      setOpenTag((prevState) => !prevState);
    }
  };

  const addTag = () => {
    const isTag = tagList.some((x) => x === tagState);
    if (tagState === "" || isTag) return;
    const newTagList = [...tagList];
    newTagList.push(tagState.toLowerCase());
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
      taskList.filter((task) => task.id === id)[0].tags.length === 0;

    // if (!filter1) return;
    if (target.checked === false) return;

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
    handleTag,
    addTag,
    selectTag,
    openTag,
    setOpenTag,
    tagState,
    setTagState,
  };
};
