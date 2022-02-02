import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoryState } from "../atoms";
import { storeCategorys } from "../store";
import { AddBtn } from "./Button";

interface IForm {
  category: string;
}

function CreateCategory() {
  const [categorys, setCategorys] = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategorys((oldCategory) => [...oldCategory, category]);
    setValue("category", "");
  };
  storeCategorys(categorys);

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a new category name you want to create",
          validate: {
            noDuplicate: (value) =>
              categorys.includes(value) ? "This category already exists" : true,
          },
        })}
        placeholder="Write a new category name"
      />
      <AddBtn>Add</AddBtn>
    </form>
  );
}

export default CreateCategory;
