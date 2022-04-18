import React from "react";
import { Task } from "../Task/index";
import { useTaskContext } from "../../context/Context";
import useFilter from "../../hooks/useFilter";
import { useParams } from "react-router";

const TaskList = () => {
  const { taskList } = useTaskContext();
  const { taskFilter } = useFilter();
  const { category } = useParams();

  return (
    <ul>
      {(!category &&
        taskList?.map((task) => <Task {...task} key={task.id} />)) ||
        taskFilter?.map((task) => <Task {...task} key={task.id} />)}
    </ul>
  );
};

export { TaskList };
