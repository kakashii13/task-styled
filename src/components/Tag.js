import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTaskContext } from "../context/Context";
import useTask from "../utilities/useTask";
import { Input } from "./CreateTask";

const InputTag = styled.div`
  width: 250px;
  padding: 3px 10px;
  position: absolute;
  top: 30px;
  right: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: #fff;
  cursor: pointer;
`;

const Tag = ({ id }) => {
  const { tagList } = useTaskContext();
  const { addTag, setTagState, tagState, selectTag, setOpenTag } = useTask();

  return (
    <InputTag>
      <Input
        placeholder="Add tag"
        autoFocus
        value={tagState}
        onChange={({ target }) => setTagState(target.value)}
      />
      <ul style={{ padding: "0" }}>
        {tagList.length == 0
          ? "Tag not found"
          : tagList.map((tag) => (
              <li
                key={tag}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 0",
                }}
              >
                <div>{tag}</div>
                <input
                  onClick={({ target }) => selectTag(tag, id, target)}
                  type="checkbox"
                />
              </li>
            ))}
      </ul>
      {tagState == "" ? (
        ""
      ) : (
        <div onClick={addTag}>{`Create + "${tagState}"`}</div>
      )}
    </InputTag>
  );
};

export default Tag;
