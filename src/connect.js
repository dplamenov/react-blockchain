import { ethers } from "ethers";
import { connect, loadContracts } from "./stores/web3";
import contracts from "./contracts";

export default async ({ dispatch }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  dispatch(
    connect({ provider, signer, account: accounts[0] })
  );
  dispatch(
    loadContracts({
      contracts: {
        nexo_token: new ethers.Contract(
          contracts.nexo_token.address,
          contracts.nexo_token.abi,
          signer
        ),
        weth: new ethers.Contract(
          contracts.weth.address,
          contracts.weth.abi,
          signer
        ),
      },
    })
  );
};
