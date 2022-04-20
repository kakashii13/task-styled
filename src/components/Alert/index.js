import React from "react";
import { AlertContainer, TextAlert } from "./styles";
import { BsX } from "react-icons/bs";
import { useTaskContext } from "../../context/Context";

export const Alert = () => {
  const { isComplete } = useTaskContext();
  return (
    <AlertContainer>
      {isComplete ? (
        <TextAlert>
          Has completado 1 tarea <BsX />
        </TextAlert>
      ) : (
        ""
      )}
    </AlertContainer>
  );
};
