import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// store
import { store, persistor } from "./store/";

// pages
import Home from "pages/home";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
);

export default App;
