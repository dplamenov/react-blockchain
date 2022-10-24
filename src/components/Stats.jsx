import { useSelector } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEtherBalance, useNetworkName, useERC20Balance } from "../hooks";

function Stats() {
  const data = useSelector((state) => state.web3);
  const balance = useEtherBalance(data.provider, data.account);
  const network = useNetworkName(data.provider);
  const nexoTokenBalance = useERC20Balance(
    data.contracts.nexo_token,
    data.account
  );

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="h2">Stats:</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>ETH Balance:</TableCell>
            <TableCell>Network name:</TableCell>
            <TableCell>NEXO Token balance:</TableCell>
            <TableCell>WETH price:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{data.account}</TableCell>
            <TableCell>{balance}</TableCell>
            <TableCell>{network}</TableCell>
            <TableCell>{nexoTokenBalance}</TableCell>
            <TableCell>XXX USDC</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default Stats;
