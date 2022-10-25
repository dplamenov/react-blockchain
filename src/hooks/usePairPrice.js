import { useState, useEffect } from "react";
import { ChainId, Token, Fetcher, Route } from "@uniswap/sdk";
import provider from "../provider";

function usePairPrice(addr1, addr2, decimals1, decimals2) {
  const [price, setPrice] = useState();

  const token1 = new Token(ChainId.MAINNET, addr1, decimals1);
  const token2 = new Token(ChainId.MAINNET, addr2, decimals2);

  useEffect(() => {
    Fetcher.fetchPairData(token1, token2, provider).then((pair) => {
      const route = new Route([pair], token2);
      setPrice(route.midPrice.invert().toSignificant(6));
    });
  }, []);

  return { price, isLoading: price === undefined };
}

export default usePairPrice;
