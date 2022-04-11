import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Nav = styled.nav`
  background-color: #d13f3f;
  color: #ffffff;
  padding: 15px;
  display: flex;
`;

const NavBar = () => {
  return (
    <Nav>
      <img src="https://icongr.am/clarity/home.svg?size=25&color=ffffff" />
      <Search />
      <img src="https://icongr.am/clarity/moon.svg?size=21&color=ffffff" />
    </Nav>
  );
};

export default NavBar;
