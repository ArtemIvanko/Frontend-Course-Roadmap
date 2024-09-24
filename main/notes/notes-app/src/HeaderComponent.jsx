import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <div>
      <NavLink to={"/main"}>Main</NavLink>
      <h1>Header</h1>
    </div>
  );
};