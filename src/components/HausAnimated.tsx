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
      <img src={BootleggersJub} />
      <div className="img-block">
        <img src={hausBlockAnimated} />
      </div>
    </ImageContainer>
  );
};
