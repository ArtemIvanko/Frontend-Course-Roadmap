import { NavLink } from "react-router-dom";
import { ThemeController } from "../components/index.jsx";

export const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/about"}>About</NavLink>
    <NavLink to={"/contacts"}>Contacts</NavLink>
    <ThemeController/>
  </header>
);