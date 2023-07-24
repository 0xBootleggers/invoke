import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Button, FormLayout, Link } from "@daohaus/ui";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: unset;
  :hover {
    text-decoration: none;
  }
`;

export const Success = () => {
  const { daoId } = useParams();

  return (
    <FormLayout
      title="Your DAO is Live"
      description="You have successfully summoned your DAO! So now you’re probably wondering what to do next."
    >
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
    </FormLayout>
  );
};

export default Success;
