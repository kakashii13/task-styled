import React, { useState } from "react";
import styled from "styled-components";
import useTask from "../utilities/useTask";

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: ${(props) => (props.description ? "5px" : "0px")};
  height: ${(props) => (props.description ? "36px" : "auto")};
`;

const CreateContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const CreateTask = () => {
  const [state, setState] = useState("");
  const { onAdd } = useTask();

  const handleEnter = (key) => {
    if (key === "Enter") {
      onAdd(state);
      setState("");
    }
  };
  return (
    // <Input
    //   placeholder="Create a new task..."
    //   onChange={({ target }) => setState(target.value)}
    //   value={state}
    //   onKeyDown={({ key }) => handleEnter(key)}
    // />
    <CreateContainer>
      <Input
        placeholder="title"
        onChange={({ target }) => setState(target.value)}
        value={state}
        onKeyDown={({ key }) => handleEnter(key)}
      />
      <Input placeholder="description" description />
    </CreateContainer>
  );
};

export default CreateTask;
