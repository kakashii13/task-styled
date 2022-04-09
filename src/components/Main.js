import React, { useState } from "react";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 80%;
  padding: 50px;
`;

const AddTask = styled.div`
  display: flex;
  color: #d13f3f;
`;

const Button = styled.button`
  padding: 7px 20px;
  margin: 10px 10px 10px 0;
  border: ${(props) => (props.primary ? "none" : "1px solid #ddd")};
  border-radius: 3px;
  background-color: ${(props) => (props.primary ? "#d13f3f" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  font-weight: bold;
`;

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    setOpenModal(true);
  };
  return (
    <MainContainer>
      <AddTask onClick={handleAdd}>
        <span>+</span>
        <p>Add task</p>
      </AddTask>
      {(openModal && (
        <div>
          <CreateTask />
          <Button primary>Add task</Button>
          <Button>Cancel</Button>
        </div>
      )) ||
        ""}
      <TaskList />
    </MainContainer>
  );
};

export default Main;
