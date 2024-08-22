import { Provider } from "react-redux";
import { store } from "./store";
import { SwapiComponent } from "./SwapiComponent";

export const App = () => (
  <Provider store={store}>
    <SwapiComponent/>
  </Provider>
);