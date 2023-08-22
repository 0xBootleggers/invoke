import React from "react";
import styled from "styled-components";
import hausBlockAnimated from "../assets/DH_Logo_rainbow.svg";
import BootleggersJub from "../assets/jug.svg";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const HausAnimated = () => {
  return (
    <ImageContainer>
      <a
        href="https://bootleggers.wtf/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={BootleggersJub} />
      </a>
      <a href="https://daohaus.club/" target="_blank" rel="noopener noreferrer">
        <img src={hausBlockAnimated} />
      </a>
    </ImageContainer>
  );
};
