import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { useTaskContext } from "../context/Context";
import useFilter from "./Filter";
import { useParams } from "react-router";
const Ul = styled.ul`
  padding: 0;
`;

const TaskList = () => {
  const { taskList } = useTaskContext();
  const { taskFilter } = useFilter();
  const { category } = useParams();

  return (
    <Ul>
      {(!category && taskList?.map((task) => <Task {...task} />)) ||
        taskFilter?.map((task) => <Task {...task} />)}
    </Ul>
  );
};

export default TaskList;
