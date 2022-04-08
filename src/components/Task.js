import React from "react";
import styled from "styled-components";
import useTask from "../utilities/useTask";

const Li = styled.li`
  width: auto;
  padding: 10px;
  margin: 10px 50px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid palevioletred;
`;

const P = styled.p`
  margin: 10px;
`;

const Img = styled.img`
  cursor: pointer;
`;

const Task = ({ text, id, complete, date }) => {
  const { onComplete, onDelete } = useTask(id);

  return (
    <Li>
      <Img
        onClick={onComplete}
        src={
          (complete &&
            "https://icongr.am/fontawesome/check-circle.svg?size=22&color=currentColor") ||
          "https://icongr.am/fontawesome/circle-thin.svg?size=22&color=currentColor"
        }
      />
      <P>{text}</P>
      <span>{date}</span>
      <Img
        onClick={onDelete}
        src="https://icongr.am/fontawesome/trash-o.svg?size=22&color=currentColor"
      />
    </Li>
  );
};

export default Task;
