import { Button, H2, H4, Link, SingleColumnLayout } from "@daohaus/ui";
import { RouterLinkButton, UnstyledUiLink } from "../components/Layout";
import styled from "styled-components";
import { FaqContent } from "../utils/content";
import { Collapser } from "../formWizard";

const ButtonLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3em;
  width: 100%;
`;

const FaqContainer = styled.div`
  margin-top: 15rem;
  text-align: left;
  width: 100%;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>A purpose-driven governance stack for your Arbitrum community.</H2>
      <ButtonLinks>
        <Button variant="outline">
          <RouterLinkButton to="/invoke">Create</RouterLinkButton>
        </Button>
        <Button color="secondary">
          <UnstyledUiLink
            href="https://docs.daohaus.club/"
            showExternalIcon={false}
          >
            Docs
          </UnstyledUiLink>
        </Button>
      </ButtonLinks>

      <FaqContainer>
        <H4>FAQs</H4>
        {FaqContent.map((faq) => {
          return (
            <Collapser
              title={faq.title}
              content={faq.content}
              key={faq.title}
            />
          );
        })}
      </FaqContainer>
    </SingleColumnLayout>
  );
};
