import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, TextField, Button } from "@mui/material";

function WrapETHIntoWETH() {
  const [amountToWrap, setAmountToWrap] = useState(0);

  const {
    contracts: { weth },
  } = useSelector((state) => state.web3);

  const wrapHandler = () => {
    weth.deposit({ value: amountToWrap });
  };

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="h2">Wrap ETH to WETH:</Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <TextField
          label="Amount ETH to wrap"
          variant="outlined"
          value={amountToWrap}
          onChange={(e) => setAmountToWrap(e.target.value)}
        />
        <Button variant="contained" onClick={wrapHandler}>
          Wrap
        </Button>
      </Box>
    </Box>
  );
}

export default WrapETHIntoWETH;
