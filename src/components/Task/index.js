import React from "react";
import useTask from "../../hooks/useTask";
import { CreateContainer, Input } from "../Modal/styles";
import { Button } from "../Button";
import { Div, Img, P, Li, List } from "./style";
import Tag from "../Tag";
import {
  BsPatchCheckFill,
  BsPatchCheck,
  BsPencil,
  BsTags,
  BsTrash,
} from "react-icons/bs";

import { useTag } from "../../hooks/useTag";

const Task = ({ title, id, complete, description, tags }) => {
  const {
    onComplete,
    handleEnter,
    openEdit,
    stateEdit,
    setStateEdit,
    handleEdit,
    setOpenEdit,
    onDelete,
    onEdit,
  } = useTask(id, title, description);
  const { openTag, handleTag } = useTag(id);

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
            {complete ? (
              <BsPatchCheckFill
                onClick={onComplete}
                style={{ marginTop: "3px" }}
              />
            ) : (
              <BsPatchCheck onClick={onComplete} style={{ marginTop: "2px" }} />
            )}
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
                {tags.length !== 0 ? (
                  <Div style={{ alignItems: "center" }}>
                    <Img
                      style={{ width: "11px", marginRight: "2px" }}
                      src="https://icongr.am/clarity/tag.svg?size=5&color=currentColor"
                    />
                    <List>
                      {tags.map((tag) => (
                        <li style={{ marginRight: "5px" }} key={tag}>
                          {tag}
                        </li>
                      ))}
                    </List>
                  </Div>
                ) : (
                  ""
                )}
              </Div>
            </Div>
          </Div>
          <div>
            <BsPencil onClick={onEdit} style={{ marginRight: "5px" }} />
            <BsTags onClick={handleTag} style={{ marginRight: "5px" }} />
            <BsTrash onClick={onDelete} />
          </div>
          {(openTag && <Tag id={id} />) || ""}
        </Div>
      )}
    </Li>
  );
};

export { Task };
