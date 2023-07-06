import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H1 } from "@daohaus/ui";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { TARGET_DAO } from "../targetDao";
import { CurrentDaoProvider, useDaoData } from "@daohaus/moloch-v3-hooks";
import { assembleSummonArgs } from "../utils/summonTx";

export const LayoutContainer = () => {
  const location = useLocation();
  // const { proposalId, memberAddress } = useParams<{
  //   proposalId: string;
  //   memberAddress: string;
  // }>();
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
      <CurrentDaoProvider
        targetDao={{
          daoChain: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
          daoId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
          // proposalId,
          // memberAddress,
        }}
      >
        <TXBuilder
          provider={provider}
          chainId={import.meta.env.VITE_TARGET_CHAIN}
          // daoId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}
          // safeId={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].SAFE_ADDRESS}
          appState={{ connectedAddress: address }}
          argCallbackRecord={{
            poopin: assembleSummonArgs,
          }}
        >
          <Outlet />
        </TXBuilder>
      </CurrentDaoProvider>
    </DHLayout>
  );
};
