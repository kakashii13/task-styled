import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 15px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #232f34;
`;

export const TagList = styled.ul`
  display: flex;
  margin: 10px 0;
`;

export const Tag = styled.li`
  margin-right: 10px;
  opacity: 0.7;
  color: #344955;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;
