import { Provider } from "react-redux";
import { store } from "./store";
import { TodoList } from "./TodoList";
import { Counter } from "./Counter";

export const App = () => (
  <Provider store={store}>
    <TodoList/>
    <Counter/>
  </Provider>
);