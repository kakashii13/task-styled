import styled from "styled-components";

export const ModalTag = styled.div`
  width: 250px;
  position: absolute;
  top: 30px;
  right: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: #fff;
  cursor: pointer;
`;

export const InputTag = styled.input`
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
`;

export const ListTag = styled.ul`
  padding: 5px 10px;
`;

export const CreateTag = styled.div`
  border-top: 1px solid #ddd;
  padding: 5px 10px;
`;
