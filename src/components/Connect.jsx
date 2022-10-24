import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import { connect, loadContracts } from "../stores/web3";
import contracts from "../contracts";

function Connect() {
  const dispatch = useDispatch();

  const connectFn = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    dispatch(
      connect({ provider, signer: provider.getSigner(), account: accounts[0] })
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

  useEffect(() => {
    connectFn();
  }, []);
}

export default Connect;
