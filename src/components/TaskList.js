import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { useTaskContext } from "../context/Context";

const Ul = styled.ul`
  padding: 0;
`;

const TaskList = () => {
  const { taskList } = useTaskContext();
  return (
    <Ul>
      {taskList?.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          complete={task.complete}
          id={task.id}
          date={task.date}
        />
      ))}
    </Ul>
  );
};

export default TaskList;
