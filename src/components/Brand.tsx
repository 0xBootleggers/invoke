import { styled } from 'styled-components';
import { H5 } from '@daohaus/ui';
import { Link } from 'react-router-dom';

import BootleggersJub from '../assets/jug.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <Container>
      <ImageContainer>
        <a
          href='https://bootleggers.wtf/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={BootleggersJub} />
        </a>
      </ImageContainer>
      <BrandLink to='/'>
        <H5>|nvÖke</H5>
      </BrandLink>
    </Container>
  );
};
