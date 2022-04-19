import styled from "styled-components";

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextAlert = styled.div`
  font-size: 14px;
  width: 300px;
  position: absolute;
  bottom: 30px;
  padding: 10px 20px;
  background-color: #fff;
  color: #404040;
  border: 1px solid #ddd;
  border-right: 3px solid #5cb85c;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.09);
`;
