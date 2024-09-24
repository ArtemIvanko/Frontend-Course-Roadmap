import { BrowserRouter } from "react-router-dom";
import { RootContainer } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RootContainer/>
    </BrowserRouter>
  </Provider>
);
