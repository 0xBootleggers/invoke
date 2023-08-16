import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Button, DataSm, H3, Link } from "@daohaus/ui";
import { InvokeContainer } from "../components/Layout";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
  }
`;

export const Success = () => {
  const { daoId } = useParams();

  return (
    <InvokeContainer>
      <H3 style={{ marginBottom: "3rem" }}>Your DAO is live! 🎉</H3>
      <DataSm style={{ marginBottom: "3rem" }}>
        You have successfully summoned your DAO! So now you’re probably
        wondering what to do next.
      </DataSm>

      <ButtonContainer>
        <Button fullWidth>
          <LinkButton
            showExternalIcon={false}
            href="https://docs.daohaus.club/"
          >
            View Docs
          </LinkButton>
        </Button>
        <Button fullWidth>
          <LinkButton
            showExternalIcon={false}
            href={`https://admin.daohaus.club/#/molochv3/${
              import.meta.env.VITE_TARGET_CHAIN
            }/${daoId}/settings`}
          >
            Advanced Settings
          </LinkButton>
        </Button>
        <Button fullWidth>
          <LinkButton
            showExternalIcon={false}
            href="https://admin.daohaus.club/"
          >
            Visit the Hub
          </LinkButton>
        </Button>
      </ButtonContainer>
    </InvokeContainer>
  );
};

export default Success;
