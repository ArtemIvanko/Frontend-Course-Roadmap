import { Provider } from "react-redux";
import { store } from "./store";
import { TodoList } from "./TodoList";
import { SagaTodoList } from "./SagaTodoList";

export const App = () => (
  <Provider store={store}>
    <TodoList/>
    <SagaTodoList/>
  </Provider>
);