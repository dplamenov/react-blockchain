import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEtherBalance, useNetworkName } from "../hooks";

function Stats() {
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
      <Typography variant="h2">Stats:</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>ETH Balance:</TableCell>
            <TableCell>Network name:</TableCell>
            <TableCell>NEXO Token balance:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{data.account}</TableCell>
            <TableCell>{balance}</TableCell>
            <TableCell>{network}</TableCell>
            <TableCell>{nexoTokenBalance}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default Stats;
