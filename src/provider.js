import { ethers } from "ethers";

const { REACT_APP_ALCHEMY_KEY, REACT_APP_NETWORK } = process.env;

export default ethers.getDefaultProvider(REACT_APP_NETWORK, {
  alchemy: REACT_APP_ALCHEMY_KEY,
});
