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
  const wethBalance = useERC20Balance(
    data.contracts.weth,
    data.account
  );
  const { price: wethPriceInUSDC, isLoading } = usePairPrice(
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    18,
    6
  );

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
