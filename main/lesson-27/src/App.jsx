import { BrowserRouter } from "react-router-dom";
import { Header } from "./main/Header";
import { Router } from "./Router.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
    </BrowserRouter>
  );
};