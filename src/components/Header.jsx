import { useSelector, useDispatch } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { disconnect as disconnectReducer } from "../stores/web3";
import connect from "../connect";

function Header() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.web3);

  const disconnect = () => {
    dispatch(disconnectReducer());
  };

  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React | Blockchain
          </Typography>
          {!!account ? (
            <Button color="inherit" onClick={disconnect}>
              Disconnect
            </Button>
          ) : (
            <Button color="inherit" onClick={() => connect({ dispatch })}>
              Connect
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
