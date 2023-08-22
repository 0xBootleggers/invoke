import { styled } from "styled-components";
import { H5 } from "@daohaus/ui";
import { Link } from "react-router-dom";

import bootImg from "../assets/jug.svg";

const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: unset;
  text-decoration: unset;
  &:hover {
    color: unset;
  }
`;

export const Brand = () => {
  return (
    <BrandLink to="/">
      <H5>|nvÖke</H5>
    </BrandLink>
  );
};
