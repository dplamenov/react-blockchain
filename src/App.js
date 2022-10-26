import { Provider } from "react-redux";
import { Box } from "@mui/material";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { store } from "./stores/store";
import { HomePage } from "./pages";
import { Connect, Footer, Header } from "./components";

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
