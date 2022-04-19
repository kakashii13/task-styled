import React, { useEffect, useRef } from "react";
import { useTaskContext } from "../../context/Context";
import { useTag } from "../../hooks/useTag";
import { ModalTag, InputTag, ListTag, CreateTag } from "./styles";

const Tag = ({ id }) => {
  const { tagList } = useTaskContext();
  const { addTag, setTagState, tagState, selectTag, setOpenTag } = useTag(id);

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
        onChange={({ target }) => setTagState(target.value.toLowerCase())}
      />

      {tagList.length === 0 ? (
        "Tag not found"
      ) : (
        <ListTag>
          {tagList.map((tag) => (
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
      )}

      {tagState === "" ? (
        ""
      ) : tagList.includes(tagState) ? (
        ""
      ) : (
        <CreateTag onClick={addTag}>{`+ Create "${tagState}"`}</CreateTag>
      )}
    </ModalTag>
  );
};

export default Tag;
