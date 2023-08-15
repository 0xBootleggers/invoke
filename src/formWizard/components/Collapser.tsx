import { ReactNode, useState } from "react";
import styled from "styled-components";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri/index.js";

import { Card, DataXl, H5 } from "@daohaus/ui";

export const CollapseContainer = styled(Card)`
  border: none;
  width: 100%;
  margin: 3rem 0;
`;

export const StyledUpArrow = styled(RiArrowUpSLine)`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }: { theme: any }) => theme.collapser.iconColor};
`;

export const StyledDownArrow = styled(RiArrowDownSLine)`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }: { theme: any }) => theme.collapser.iconColor};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`;

type CollapserProps = {
  title?: string;
  content: ReactNode;
};

export const Collapser = ({ title, content }: CollapserProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <CollapseContainer>
      <TitleContainer>
        {title && <DataXl> {title}</DataXl>}

        {open && (
          <div onClick={handleToggle}>
            <StyledUpArrow />
          </div>
        )}
        {!open && (
          <div onClick={handleToggle}>
            <StyledDownArrow />
          </div>
        )}
      </TitleContainer>
      {open && <div>{content}</div>}
    </CollapseContainer>
  );
};
