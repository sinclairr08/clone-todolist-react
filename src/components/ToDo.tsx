import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, IToDo, toDoState } from "../atoms";
import { storeToDos } from "../store";
import { RemoveBtn } from "./Button";

const ToDoText = styled.span`
  font-size: 24px;
`;

function ToDo({ text, curCategory, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const categorys = useRecoilValue(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, curCategory: value };

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
    <>
      <ToDoText>{text.length > 22 ? text.slice(0, 20) + "..." : text}</ToDoText>
      <RemoveBtn onClick={onDeleteClick}>X</RemoveBtn>
      <select onInput={onInput} defaultValue={curCategory}>
        {categorys.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default ToDo;
