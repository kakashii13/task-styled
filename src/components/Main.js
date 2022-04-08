import React from "react";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 80%;
`;

const AddTask = styled.div`
  display: flex;
  color: #d13f3f;
`;

const Main = () => {
  return (
    <MainContainer>
      <AddTask>
        <span>+</span>
        <p>Add task</p>
      </AddTask>
      <CreateTask />
      <TaskList />
    </MainContainer>
  );
};

export default Main;
