import React, { useState } from "react";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";
import useTask from "../utilities/useTask";
import { CreateContainer, Input } from "./CreateTask";
import { Button } from "./Main";

const Li = styled.li`
  width: auto;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
`;

const P = styled.p`
  margin: 10px;
`;

const Img = styled.img`
  cursor: pointer;
  width: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Task = ({ title, id, complete, description }) => {
  const {
    onComplete,
    onDelete,
    onEdit,
    handleEnter,
    openEdit,
    stateEdit,
    setStateEdit,
    handleEdit,
  } = useTask(id, title, description);

  return (
    <Li>
      {(openEdit && (
        <div>
          <CreateContainer>
            <Input
              autoFocus
              placeholder="For ex. Read The Lord of the Rings"
              onChange={({ target }) =>
                setStateEdit({ ...stateEdit, title: target.value })
              }
              value={stateEdit.title}
              onKeyDown={({ key }) => handleEnter(key)}
            />
            <Input
              placeholder="Description"
              description
              onChange={({ target }) =>
                setStateEdit({ ...stateEdit, description: target.value })
              }
              value={stateEdit.description}
            />
          </CreateContainer>
          <Button primary onClick={handleEdit}>
            Save
          </Button>
          <Button>Cancel</Button>
        </div>
      )) || (
        <Div>
          <Div>
            <Img
              onClick={onComplete}
              src={
                (complete &&
                  "https://icongr.am/clarity/check-circle.svg?size=28&color=currentColor") ||
                "https://icongr.am/octicons/circle.svg?size=23&color=currentColor"
              }
            />
            <P>{title}</P>
            <P>{description}</P>
          </Div>
          <Div>
            <Img
              onClick={onEdit}
              src="https://icongr.am/clarity/edit.svg?size=22&color=currentColor"
            />
            <Img
              onClick={onDelete}
              src="https://icongr.am/fontawesome/trash-o.svg?size=22&color=currentColor"
            />
          </Div>
        </Div>
      )}
    </Li>
  );
};

export default Task;
