import { Provider } from "react-redux";
import { store } from "./stores/store";
import { HomePage } from "./pages";
import { Connect, Footer, Header } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Connect />
      <Header />
      <HomePage />
      <Footer />
    </Provider>
  );
}

export default App;
