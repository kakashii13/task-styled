import React, { useEffect, useRef } from "react";
import { useTaskContext } from "../../context/Context";
import useTask from "../../hooks/useTask";
import { ModalTag, InputTag, ListTag, CreateTag } from "./styles";

const Tag = ({ id }) => {
  const { tagList, setOpenTag, openTag } = useTaskContext();
  const { addTag, setTagState, tagState, selectTag } = useTask();

  const domRef = useRef();

  useEffect(() => {
    const closeTag = (e) => {
      if (!domRef.current.contains(e.target)) {
        setOpenTag(false);
      }
    };

    document.addEventListener("mousedown", closeTag);
    return () => document.removeEventListener("mousedown", closeTag);
  }, []);

  return (
    <ModalTag ref={domRef}>
      <InputTag
        placeholder="Add tag"
        autoFocus
        value={tagState}
        onChange={({ target }) => setTagState(target.value)}
      />
      <ListTag>
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
      </ListTag>
      {tagState == "" ? (
        ""
      ) : (
        <CreateTag onClick={addTag}>{`+ Create "${tagState}"`}</CreateTag>
      )}
    </ModalTag>
  );
};

export default Tag;
