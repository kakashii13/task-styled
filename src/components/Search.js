import React from "react";
import styled from "styled-components";

const SearchedBar = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  width: auto;
  display: flex;
  padding: 5px;
  margin: 0 10px;
`;

const InputSearch = styled.input`
  border: none;
  outline: none;
  margin-left: 4px;
`;

const Search = () => {
  return (
    <SearchedBar>
      <img src="https://icongr.am/clarity/search.svg?size=18&color=000000" />
      <InputSearch placeholder="Buscar" />
    </SearchedBar>
  );
};

export default Search;
