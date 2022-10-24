import { useSelector, useDispatch } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { ethers } from "ethers";
import contracts from "../contracts";
import { disconnect as disconnectReducer, connect as connectReducer, loadContracts } from "../stores/web3";


function Header() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.web3);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    dispatch(
      connectReducer({ provider, signer: provider.getSigner(), account: accounts[0] })
    );
    dispatch(
      loadContracts({
        contracts: {
          nexo_token: new ethers.Contract(
            contracts.nexo_token.address,
            contracts.nexo_token.abi,
            provider
          ),
        },
      })
    );
  };

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
            <Button color="inherit" onClick={connect}>Connect</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
