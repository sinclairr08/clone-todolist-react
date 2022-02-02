import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  categoryState,
  curCategoryState,
  toDoSelector,
  toDoState,
} from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoListContainer = styled.div``;

const ToDoListTitle = styled.h1`
  text-align: center;
  font-size: 48px;
`;

const ToDoListInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ToDoListGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  row-gap: 13px;

  h2 {
    color: #54bab9;
  }
`;

const CategorySelector = styled.select`
  position: absolute;
  right: 75px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [curCategory, setCurCategory] = useRecoilState(curCategoryState);
  const categorys = useRecoilValue(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCurCategory(event.currentTarget.value as any);
  };

  return (
    <ToDoListContainer>
      <ToDoListTitle>To Dos</ToDoListTitle>
      <hr />
      <ToDoListInput>
        <CreateCategory />
      </ToDoListInput>
      <hr />
      <ToDoListInput>
        <CreateToDo />
        <CategorySelector value={curCategory} onInput={onInput}>
          {categorys.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategorySelector>
      </ToDoListInput>
      <hr />

      <ToDoListGrid>
        <h2>Content</h2>
        <h2>Remove</h2>
        <h2>Move to</h2>

        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDoListGrid>
    </ToDoListContainer>
  );
}

export default ToDoList;
