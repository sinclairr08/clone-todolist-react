import { IToDo } from "./atoms";

const TODOS_KEY = "todos";
const CATEGORYS_KEY = "categorys"


export const getToDos = () => {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  return savedToDos ? JSON.parse(savedToDos) : [];
};

export const getCategorys = () => {
  const savedCategorys = localStorage.getItem(CATEGORYS_KEY);
  return savedCategorys ? JSON.parse(savedCategorys) : ["To Do", "Doing", "Done"];
};

export const storeToDos = (toDos: IToDo[]) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

export const storeCategorys = (categorys: string[]) => {
  localStorage.setItem(CATEGORYS_KEY, JSON.stringify(categorys));
};
