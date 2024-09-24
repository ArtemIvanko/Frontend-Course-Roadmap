import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { FormTextField } from "./FormTextField";

const schema = yup.object().shape({
  todosList : yup.string().required("Todos List is required"),
});

export const Form = () => {
  const { handleSubmit, ...methods } = useForm({
    resolver : yupResolver(schema),
    defaultValues : {
      todoList : "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <FormProvider handleSubmit={handleSubmit} {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField name="todosList" label="Todos List"/>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
