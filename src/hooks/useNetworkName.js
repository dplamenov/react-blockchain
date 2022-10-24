import { useState, useEffect } from "react";

function useNetworkName(provider) {
  const [network, setNetwork] = useState(0);

  useEffect(() => {
    if (!provider) {
      return;
    }
    provider.getNetwork().then((network) => {
      setNetwork(network.name);
    });
  }, [provider]);

  return network;
}

export default useNetworkName;
