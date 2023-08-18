import { styled } from "styled-components";
import { H5 } from "@daohaus/ui";
import { Link } from "react-router-dom";

const BrandLink = styled(Link)`
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
