import styled from "styled-components";

export const Li = styled.li`
  width: auto;
  padding: 10px;
  margin: 10px 0;
  list-style: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  position: relative;
  background-color: #fff;
`;

export const P = styled.p`
  margin: 0 10px;
  width: auto;
  font-size: ${(props) => (props.description ? "13px" : "15px")};
  color: ${(props) => (props.description ? "#888888" : "#000")};
`;

export const Img = styled.img`
  cursor: pointer;
  width: 20px;
  padding: 0 2px;

  &:hover {
    background: #d7d7d7;
    border-radius: 3px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.text ? "column" : "row")};
  justify-content: space-between;
  align-items: start;
  z-index: 1;
`;
