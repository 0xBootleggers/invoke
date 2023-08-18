import { styled } from "styled-components";

import { DataMd, DataXs } from "@daohaus/ui";
import { HausAnimated } from "./HausAnimated";

const FooterContainer = styled.div`
  margin-top: 50rem;
  margin-bottom: 4.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <HausAnimated />
      <DataXs>Built by Bootleggers on DAOHaus</DataXs>
    </FooterContainer>
  );
};
