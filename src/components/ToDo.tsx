import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";
import { storeToDos } from "../store";

const ToDoContatiner = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 8px;
`;

const ToDoText = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const ChangeStateBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 3px 8px;
  margin-left: 3px;
  background-color: ${(props) => props.theme.componentColor};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;

  &:last-child {
    padding: 1px 8px;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteClick = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  storeToDos(toDos);

  return (
    <ToDoContatiner>
      <ToDoText>{`> ${text}`}</ToDoText>
      {category !== Categories.DOING && (
        <ChangeStateBtn name={Categories.DOING} onClick={onClick}>
          Doing
        </ChangeStateBtn>
      )}
      {category !== Categories.TO_DO && (
        <ChangeStateBtn name={Categories.TO_DO} onClick={onClick}>
          To Do
        </ChangeStateBtn>
      )}
      {category !== Categories.DONE && (
        <ChangeStateBtn name={Categories.DONE} onClick={onClick}>
          Done
        </ChangeStateBtn>
      )}
      <ChangeStateBtn onClick={onDeleteClick}>❌</ChangeStateBtn>
    </ToDoContatiner>
  );
}

export default ToDo;
