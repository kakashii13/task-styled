import React from "react";
import { AlertContainer, TextAlert } from "./styles";
import { BsX } from "react-icons/bs";

export const Alert = () => {
  return (
    <AlertContainer>
      <TextAlert>
        Has completado 1 tarea <BsX />
      </TextAlert>
    </AlertContainer>
  );
};
