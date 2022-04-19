import React from "react";
import Search from "../Search";
import { Nav } from "./styles";
import { BsHouse } from "react-icons/bs";

const NavBar = () => {
  return (
    <Nav>
      <BsHouse style={{ fontSize: "24px" }} />
      <Search />
      <img src="https://icongr.am/clarity/moon.svg?size=21&color=ffffff" />
    </Nav>
  );
};

export default NavBar;
