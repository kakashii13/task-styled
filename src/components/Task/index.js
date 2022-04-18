import React, { useEffect, useRef } from "react";
import useTask from "../../hooks/useTask";
import { CreateContainer, Input } from "../CreateTask";
import { Button } from "../Button";
import Tag from "../Tag";
import { Div, Img, P, Li } from "./style";

const Task = ({ title, id, complete, description, tags }) => {
  const {
    onComplete,
    onDelete,
    onEdit,
    handleEnter,
    openEdit,
    stateEdit,
    setStateEdit,
    handleEdit,
    setOpenEdit,
    openTag,
    handleTag,
    setOpenTag,
  } = useTask(id, title, description);

  const btnRef = useRef();

  useEffect(() => {
    const closeTag = (e) => {
      if (e.path[0] !== btnRef.current) {
        setOpenTag(false);
      }
    };

    document.body.addEventListener("click", closeTag);

    return () => document.body.removeEventListener("click", closeTag);
  }, []);

  return (
    <Li>
      {(openEdit && (
        <>
          <CreateContainer>
            <Input
              autoFocus
              placeholder="For ex. Read The Lord of the Rings"
              onChange={({ target }) =>
                setStateEdit({ ...stateEdit, title: target.value })
              }
              value={stateEdit.title}
              onKeyDown={({ key }) => handleEnter(key)}
            />
            <Input
              placeholder="Description"
              description
              onChange={({ target }) =>
                setStateEdit({ ...stateEdit, description: target.value })
              }
              value={stateEdit.description}
            />
          </CreateContainer>
          <Button primary onClick={handleEdit}>
            Save
          </Button>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
        </>
      )) || (
        <Div>
          <Div>
            <Img
              onClick={onComplete}
              src={
                (complete &&
                  "https://icongr.am/clarity/check-circle.svg?size=28&color=currentColor") ||
                "https://icongr.am/octicons/circle.svg?size=23&color=currentColor"
              }
            />
            <Div text>
              <P>{title}</P>
              <P description>{description}</P>
              <Div
                style={{
                  fontSize: "12px",
                  alignItems: "center",
                  margin: "5px 10px 0",
                  color: "#707070",
                }}
              >
                {tags.length != 0 ? (
                  <Div style={{ alignItems: "center" }}>
                    <Img
                      style={{ width: "11px", marginRight: "2px" }}
                      src="https://icongr.am/clarity/tag.svg?size=5&color=currentColor"
                    />
                    <Div>
                      {tags.map((tag) => (
                        <li style={{ marginRight: "5px" }} key={tag}>
                          {tag}
                        </li>
                      ))}
                    </Div>
                  </Div>
                ) : (
                  ""
                )}
              </Div>
            </Div>
          </Div>
          <Div>
            <Img
              onClick={onEdit}
              src="https://icongr.am/clarity/edit.svg?size=22&color=currentColor"
            />
            <Img
              ref={btnRef}
              onClick={handleTag}
              src="https://icongr.am/clarity/tag.svg?size=16&color=currentColor"
            />
            <Img
              onClick={onDelete}
              src="https://icongr.am/fontawesome/trash-o.svg?size=22&color=currentColor"
            />
          </Div>
          {(openTag && <Tag id={id} />) || ""}
        </Div>
      )}
    </Li>
  );
};

export { Task };
