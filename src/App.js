import { Provider } from "react-redux";
import { Box } from "@mui/material";
import { store } from "./stores/store";
import { HomePage } from "./pages";
import { Connect, Footer, Header } from "./components";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <Provider store={store}>
      <NotificationContainer />
      <Connect />
      <Header />
      <Box sx={{ maxWidth: "xl", margin: "0 auto" }}>
        <HomePage />
      </Box>
      <Footer />
    </Provider>
  );
}

export default App;
