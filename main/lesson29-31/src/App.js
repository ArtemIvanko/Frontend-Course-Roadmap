import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./Counter";

export const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);