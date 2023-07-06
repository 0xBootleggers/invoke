import { Outlet, useLocation } from "react-router-dom";

import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H1 } from "@daohaus/ui";

import { assembleSummonArgs } from "../utils/summonTx";

export const LayoutContainer = () => {
  const location = useLocation();
  const { provider, address } = useDHConnect();

  return (
    <DHLayout
      pathname={location.pathname}
      navLinks={[
        { label: "Home", href: `/` },
        { label: "Invoke", href: `invoke` },
      ]}
      leftNav={<H1>Invoke</H1>}
    >
      <TXBuilder
        provider={provider}
        chainId={import.meta.env.VITE_TARGET_CHAIN}
        appState={{ connectedAddress: address }}
        argCallbackRecord={{
          summonArgs: assembleSummonArgs,
        }}
      >
        <Outlet />
      </TXBuilder>
    </DHLayout>
  );
};
