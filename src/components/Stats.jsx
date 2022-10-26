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
import {
  useEtherBalance,
  useNetworkName,
  useERC20Balance,
  usePairPrice,
} from "../hooks";
import Loader from "./Loader";

function Stats() {
  const data = useSelector((state) => state.web3);
  const balance = useEtherBalance(data.provider, data.account);
  const network = useNetworkName(data.provider);
  const nexoTokenBalance = useERC20Balance(
    data.contracts.nexo_token,
    data.account
  );
  const wethBalance = useERC20Balance(data.contracts.weth, data.account);
  const { price: wethPriceInUSDC, isLoading } = usePairPrice("weth", "usdc");

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="h2">Stats:</Typography>
      {!isLoading && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Account:</TableCell>
              <TableCell>ETH Balance:</TableCell>
              <TableCell>Network name:</TableCell>
              <TableCell>NEXO Token balance:</TableCell>
              <TableCell>WETH price:</TableCell>
              <TableCell>WETH balance:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{data.account}</TableCell>
              <TableCell>{balance}</TableCell>
              <TableCell>{network}</TableCell>
              <TableCell>{nexoTokenBalance}</TableCell>
              <TableCell>{wethPriceInUSDC} USDC</TableCell>
              <TableCell>{wethBalance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
      {isLoading && <Loader />}
    </Box>
  );
}

export default Stats;
