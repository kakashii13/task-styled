import React from "react";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";

const SideContainer = styled.div`
  background-color: #fafafa;
  width: 245px;
  padding: 15px 0 0 15px;
`;

const SideBar = () => {
  const { tagList, setTagList } = useTaskContext();
  return (
    <SideContainer>
      <h2>Categories</h2>
      <div>
        {tagList.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </div>
    </SideContainer>
  );
};

export default SideBar;
