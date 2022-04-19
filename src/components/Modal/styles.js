import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: ${(props) => (props.description ? "5px" : "0px")};
  height: ${(props) => (props.description ? "36px" : "auto")};
`;

export const CreateContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
