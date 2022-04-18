import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Nav = styled.nav`
  background-color: #344955;
  color: #ffffff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
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
