import { Link, LinkStyles } from "@daohaus/ui";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const StyledRouterLink = styled(RouterLink)`
  ${LinkStyles}
`;

export const RouterLinkButton = styled(RouterLink)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
  }
`;

export const UnstyledUiLink = styled(Link)`
  text-decoration: none;
  color: unset;
  font-weight: unset;
  &:hover {
    text-decoration: none;
  }
`;
