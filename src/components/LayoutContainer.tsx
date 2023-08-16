import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { DaoHausNav, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H5, MainLayout, OuterLayout, widthQuery } from "@daohaus/ui";

import { assembleSummonArgs } from "../utils/summonTx";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 3rem;
  width: 100%;
  @media ${widthQuery.sm} {
    padding: 2rem;
  }
  .left-nav {
    @media ${widthQuery.sm} {
      width: 100%;
    }
  }
`;

export const LayoutContainer = () => {
  const { publicClient, address } = useDHConnect();

  return (
    <TXBuilder
      publicClient={publicClient}
      chainId={import.meta.env.VITE_TARGET_CHAIN}
      appState={{ connectedAddress: address }}
      argCallbackRecord={{
        summonArgs: assembleSummonArgs,
      }}
    >
      <OuterLayout>
        <Header>
          <div className="left-nav">{<H5>Invoke</H5>}</div>
          <DaoHausNav />
        </Header>

        <MainLayout>
          <Outlet />
        </MainLayout>
        {/* {footer here} */}
      </OuterLayout>
    </TXBuilder>
  );
};
