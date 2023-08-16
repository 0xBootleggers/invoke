import {
  Button,
  H1,
  H2,
  H3,
  H4,
  Link,
  SingleColumnLayout,
  widthQuery,
} from "@daohaus/ui";
import { RouterLinkButton, UnstyledUiLink } from "../components/Layout";
import styled from "styled-components";
import { FaqContent } from "../utils/content";
import { Collapser } from "../formWizard";

const BiggerH1 = styled(H1)`
  font-size: 6.4rem;
  @media ${widthQuery.sm} {
    font-size: 4rem;
  }
`;

const ButtonLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 3em;
  width: 100%;
  margin-top: 6rem;
`;

const FaqContainer = styled.div`
  margin-top: 15rem;
  text-align: left;
  width: 100%;
`;

const FaqHeader = styled.div`
  width: 100%;
  text-align: center;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <BiggerH1>
        A purpose-driven governance stack for your Arbitrum community.
      </BiggerH1>
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
        <FaqHeader>
          <H3>FAQs</H3>
        </FaqHeader>
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
