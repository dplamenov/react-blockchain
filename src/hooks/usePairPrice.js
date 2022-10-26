import { useState, useEffect } from "react";
import { ChainId, Token, Fetcher, Route } from "@uniswap/sdk";
import provider from "../provider";
import contracts from "../contracts";

const initToken = (address, decimals = 18) => {
  return new Token(ChainId.MAINNET, address, decimals);
};

function usePairPrice(token1Name, token2Name) {
  const [price, setPrice] = useState();

  const contract1 = contracts[token1Name];
  const contract2 = contracts[token2Name];

  useEffect(() => {
    if (!contract1 || !contract2) {
      return setPrice(0);
    }
    const token1 = initToken(contract1.address, contract1.decimals);
    const token2 = initToken(contract2.address, contract2.decimals);

    Fetcher.fetchPairData(token1, token2, provider).then((pair) => {
      const route = new Route([pair], token2);
      setPrice(route.midPrice.invert().toSignificant(6));
    });
  }, []);

  return { price, isLoading: price === undefined };
}

export default usePairPrice;
