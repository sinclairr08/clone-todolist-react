import { IToDo } from "./atoms";

export const TODOS_KEY = "todos";

export const getToDos = () => {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  return savedToDos ? JSON.parse(savedToDos) : [];
};

export const storeToDos = (toDos: IToDo[]) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};
