import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 20px;
  margin: 10px 10px 10px 0;
  border: ${(props) => (props.primary ? "none" : "1px solid #ddd")};
  border-radius: 3px;
  background-color: ${(props) => (props.primary ? "#f9aa33" : "#fff")};
  color: #232f34;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
