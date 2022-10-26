import { ethers } from "ethers";
import { connect, loadContracts } from "./stores/web3";
import contracts from "./contracts";

export default async ({ dispatch }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  dispatch(connect({ provider, signer, account: accounts[0] }));
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

  const chainId = (await provider.getNetwork()).chainId;

  if (chainId !== 1) {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  }

  provider.on("network", (_, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload();
    }
  });
};
