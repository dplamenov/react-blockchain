import { useState, useEffect } from "react";
import { ethers } from "ethers";

function useEtherBalance(provider, address) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!provider) {
      return;
    }
    provider.getBalance(address).then((balance) => {
      const balanceInEth = ethers.utils.formatEther(balance);
      setBalance(balanceInEth);
    });
  }, [provider, address]);

  return balance;
}

export default useEtherBalance;
