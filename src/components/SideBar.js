import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";

const SideContainer = styled.div`
  background-color: #fafafa;
  width: 30%;
  padding: 15px 0 0 15px;
`;

const SideBar = () => {
  const { tagList } = useTaskContext();

  return (
    <SideContainer>
      <h2>Categories</h2>
      <ul style={{ cursor: "pointer" }}>
        <li>
          <Link to="/">All</Link>
        </li>
        {tagList.map((tag) => (
          <li key={tag}>
            <Link to={`/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </SideContainer>
  );
};

export default SideBar;
