import styled from 'styled-components';
import hausBlockAnimated from '../assets/DH_Logo_rainbow.svg';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HausAnimated = () => {
  return (
    <ImageContainer>
      <a href='https://daohaus.club/' target='_blank' rel='noopener noreferrer'>
        <img src={hausBlockAnimated} />
      </a>
    </ImageContainer>
  );
};
