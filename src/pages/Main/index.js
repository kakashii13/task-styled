import React from "react";
import { TaskList } from "../../components/TaskList/index";
import CreateTask from "../../components/CreateTask";
import useTask from "../../hooks/useTask";
import { useTaskContext } from "../../context/Context";
import { AddTask, MainContainer } from "./styles";
import { Button } from "../../components/Button";

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
          <img src="https://icongr.am/clarity/add.svg?size=22&color=232f34" />
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

export { Main };
