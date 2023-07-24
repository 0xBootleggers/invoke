import styled from "styled-components";
import { Button, H2, SingleColumnLayout } from "@daohaus/ui";
import { RouterLinkButton } from "../components/Layout";

const ButtonLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3em;
  width: 100%;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>A purpose-driven governance stack for your Arbitrum community.</H2>
      <ButtonLinks>
        <Button>
          <RouterLinkButton to="/invoke">Create</RouterLinkButton>
        </Button>
      </ButtonLinks>
    </SingleColumnLayout>
  );
};
