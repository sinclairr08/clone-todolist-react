import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { curCategoryState, toDoState } from "../atoms";
import { storeToDos } from "../store";
import { AddBtn } from "./Button";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const curCategory = useRecoilValue(curCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), curCategory },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  storeToDos(toDos);

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: `Please write a new ${curCategory}`,
        })}
        placeholder={`Write a new ${curCategory}`}
      />
      <AddBtn>Add</AddBtn>
    </form>
  );
}

export default CreateToDo;
