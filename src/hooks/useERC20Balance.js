import { useState, useEffect } from "react";
import { ethers } from "ethers";

function useERC20Balance(contract, address) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!contract) {
      return;
    }
    contract.balanceOf(address).then((balance) => {
      const balanceInEth = ethers.utils.formatEther(balance);
      setBalance(balanceInEth);
    });
  }, [contract, address]);

  return balance;
}

export default useERC20Balance;
