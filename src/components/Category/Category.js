import React from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../../context/Context";
import { CategoryContainer, Title, TagList, Tag } from "./styles";

const Category = () => {
  const { tagList } = useTaskContext();

  return (
    <CategoryContainer>
      <Title>Categories</Title>
      <TagList style={{ cursor: "pointer" }}>
        <Tag>
          <Link to="/">All</Link>
        </Tag>
        {tagList.map((tag) => (
          <Tag key={tag}>
            <Link to={`/${tag}`}>{tag}</Link>
          </Tag>
        ))}
      </TagList>
    </CategoryContainer>
  );
};

export default Category;
