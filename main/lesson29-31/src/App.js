import { Provider } from "react-redux";
import { store } from "./store";
import { TodoList } from "./TodoList";

export const App = () => (
  <Provider store={store}>
    <TodoList/>
  </Provider>
);