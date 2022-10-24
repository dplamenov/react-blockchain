import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import { useEtherBalance, useNetworkName } from "../hooks";

function HomePage() {
  const data = useSelector((state) => state.web3);
  const balance = useEtherBalance(data.provider, data.account);
  const network = useNetworkName(data.provider);
  const [nexoTokenBalance, setNexoTokenBalance] = useState(0);

  useEffect(() => {
    if (!data.provider) {
      return;
    }
    const nexoContract = data.contracts.nexo_token;
    nexoContract.balanceOf(data.account).then((balance) => {
      const balanceInEth = ethers.utils.formatEther(balance);
      setNexoTokenBalance(balanceInEth);
    });
  }, [data]);

  return (
    <>
      <p>Account: {data.account}</p>
      <p>ETH Balance: {balance}</p>
      <p>Network name: {network}</p>
      <p>NEXO Token balance: {nexoTokenBalance}</p>
    </>
  );
}

export default HomePage;
