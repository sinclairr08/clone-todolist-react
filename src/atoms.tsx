import { atom, selector } from "recoil";
import { getCategorys, getToDos } from "./store";

export interface IToDo {
  text: string;
  id: number;
  curCategory: string;
}

export const categoryState = atom<string[]>({
  key: "category",
  default: getCategorys(),
})

export const curCategoryState = atom<string>({
  key: "curCategory",
  default: "To Do",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: getToDos(),
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const curCategory = get(curCategoryState);
    return toDos.filter((toDo) => toDo.curCategory === curCategory);
  },
});
