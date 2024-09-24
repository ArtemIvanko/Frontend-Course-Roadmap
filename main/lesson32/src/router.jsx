import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { TodoList } from "./pages/TodoList";
import { Swapi } from "./pages/Swapi";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/todo" element={<TodoList/>}/>
    <Route path="/swapi" element={<Swapi/>}/>
    <Route path="*" element={<h1>404</h1>}/>
  </Routes>
);