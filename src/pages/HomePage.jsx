import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Stats, WrapETHIntoWETH } from "../components";

function HomePage() {
  const { account } = useSelector((state) => state.web3);

  return (
    <>
      {!!account ? (
        <>
          <Stats />
          <WrapETHIntoWETH />
        </>
      ) : (
        <>
          <Typography variant="h2">Not connect to blockchain.</Typography>
        </>
      )}
    </>
  );
}

export default HomePage;
