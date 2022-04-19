import React from "react";
import { TaskList } from "../../components/TaskList/index";
import CreateTask from "../../components/Modal";
import useTask from "../../hooks/useTask";
import { useTaskContext } from "../../context/Context";
import { AddTask, MainContainer } from "./styles";
import { Button } from "../../components/Button";
import { BsPlus } from "react-icons/bs";

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
          <BsPlus />
          <p style={{ margin: "10px 4px" }}>Add task</p>
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

export { Main };
