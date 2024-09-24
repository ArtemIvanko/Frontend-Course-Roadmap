import { Provider } from "react-redux";
import { store } from "./store";
import { SagaTodoList } from "./SagaTodoList";

export const App = () => (
  <Provider store={store}>
    <SagaTodoList/>
  </Provider>
);