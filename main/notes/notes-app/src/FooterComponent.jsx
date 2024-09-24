import { useContext } from "react";
import { Context } from "./App";

export const FooterComponent = () => {
  const contextValue = useContext(Context);
  return (
    <div>
      <h1>Footer</h1>
      <p>Context Value: {contextValue}</p> {}
    </div>
  );
};
