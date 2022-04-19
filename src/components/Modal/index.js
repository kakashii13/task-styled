import React from "react";
import { useTaskContext } from "../../context/Context";
import useTask from "../../hooks/useTask";
import { Input, CreateContainer } from "./styles";

const CreateTask = () => {
  const { handleEnter } = useTask();
  const { state, setState } = useTaskContext();
  return (
    <CreateContainer>
      <Input
        autoFocus
        placeholder="For ex. Read The Lord of the Rings"
        onChange={({ target }) => setState({ ...state, title: target.value })}
        value={state.title}
        onKeyDown={({ key }) => handleEnter(key)}
      />
      <Input
        placeholder="Description"
        description
        onChange={({ target }) =>
          setState({ ...state, description: target.value })
        }
        value={state.description}
      />
    </CreateContainer>
  );
};

export default CreateTask;
