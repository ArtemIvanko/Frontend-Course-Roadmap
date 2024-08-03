import { Route, Routes } from "react-router";
import { FinalForm } from "./FinalForm";
import { ReduxCounter } from "./ReduxCounter";
import { ReduxTodoList } from "./ReduxTodoList";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FinalForm/>}/>
        <Route path="/redux-counter" element={<ReduxCounter/>}/>
        <Route path="/redux-todo-list" element={<ReduxTodoList/>}/>
      </Routes>
    </div>
  );
};
