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

export const InvokeContainer = styled.div`
  margin-top: 16.3rem;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 8px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
`;
