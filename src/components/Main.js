import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import styled from "styled-components";
import useTask from "../utilities/useTask";
import { useTaskContext } from "../context/Context";

const MainContainer = styled.main`
  width: 80%;
  padding: 50px;
`;

const AddTask = styled.div`
  display: flex;
  align-items: center;
  color: #5c5c5c;
  cursor: pointer;

  &:hover {
    color: #d13f3f;
  }
`;

export const Button = styled.button`
  padding: 7px 20px;
  margin: 10px 10px 10px 0;
  border: ${(props) => (props.primary ? "none" : "1px solid #ddd")};
  border-radius: 3px;
  background-color: ${(props) => (props.primary ? "#d13f3f" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const Main = () => {
  const { openModal, setOpenModal } = useTaskContext();
  const { onAdd } = useTask();

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <MainContainer>
      {(!openModal && (
        <AddTask onClick={handleAdd}>
          <img src="https://icongr.am/clarity/add.svg?size=22&color=d13f3f" />
          <p style={{ margin: "0 10px" }}>Add task</p>
        </AddTask>
      )) ||
        ""}
      {(openModal && (
        <div>
          <CreateTask />
          <Button primary onClick={onAdd}>
            Add task
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      )) ||
        ""}
      <TaskList />
    </MainContainer>
  );
};

export default Main;
