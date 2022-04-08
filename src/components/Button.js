import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background: palevioletred;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100px;
  cursor: pointer;
  font-size: 15px;
`;

const Button = () => {
  return <Btn>Add</Btn>;
};

export default Button;
