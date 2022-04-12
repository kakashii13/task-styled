import React, { useState } from "react";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";
import useTask from "../utilities/useTask";
import { CreateContainer, Input } from "./CreateTask";
import { Button } from "./Main";
import Tag from "./Tag";

const Li = styled.li`
  width: auto;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
  position: relative;
`;

const P = styled.p`
  margin: 0 10px;
  width: 600px;
  font-size: ${(props) => (props.description ? "12px" : "14px")};
  color: ${(props) => (props.description ? "#888888" : "#000")};
`;

const Img = styled.img`
  cursor: pointer;
  width: 20px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.text ? "column" : "row")};
  justify-content: space-between;
  align-items: start;
  z-index: 1;
`;

const Task = ({ title, id, complete, description, tags }) => {
  const {
    onComplete,
    onDelete,
    onEdit,
    handleEnter,
    openEdit,
    stateEdit,
    setStateEdit,
    handleEdit,
    setOpenEdit,
    openTag,
    handleTag,
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
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
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
            <Div text>
              <P>{title}</P>
              <P description>{description}</P>
              <Div
                style={{
                  fontSize: "12px",
                  alignItems: "center",
                  margin: "5px 10px 0",
                  color: "#707070",
                }}
              >
                <Img
                  style={{ width: "11px", marginRight: "2px" }}
                  src="https://icongr.am/clarity/tag.svg?size=5&color=currentColor"
                />
                <span style={{ verticalAlign: "center" }}>{tags}</span>
              </Div>
            </Div>
          </Div>
          <Div>
            <Img
              onClick={onEdit}
              src="https://icongr.am/clarity/edit.svg?size=22&color=currentColor"
            />
            <Img
              onClick={handleTag}
              src="https://icongr.am/clarity/tag.svg?size=16&color=currentColor"
            />
            <Img
              onClick={onDelete}
              src="https://icongr.am/fontawesome/trash-o.svg?size=22&color=currentColor"
            />
          </Div>
          {(openTag && <Tag id={id} />) || ""}
        </Div>
      )}
    </Li>
  );
};

export default Task;
