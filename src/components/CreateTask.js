import React, { useState } from "react";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";
import useTask from "../utilities/useTask";

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: ${(props) => (props.description ? "5px" : "0px")};
  height: ${(props) => (props.description ? "36px" : "auto")};
`;

export const CreateContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const CreateTask = () => {
  const { handleEnter } = useTask();
  const { state, setState } = useTaskContext();
  return (
    <CreateContainer>
      <Input
        autoFocus
        placeholder="For ex. Read The Lord of the Rings"
        onChange={({ target }) => setState(target.value)}
        value={state}
        onKeyDown={({ key }) => handleEnter(key)}
      />
      <Input placeholder="Description" description />
    </CreateContainer>
  );
};

export default CreateTask;
