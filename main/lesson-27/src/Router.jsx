import { Route, Routes } from "react-router";
import { About, Contacts, Home } from "./main/index.jsx";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
  </Routes>
);