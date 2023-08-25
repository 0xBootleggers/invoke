import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Button, DataSm, H3, Link } from '@daohaus/ui';
import { InvokeContainer } from '../components/Layout';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
  }
`;

export const Success = () => {
  const { width } = useWindowSize();
  const { daoId } = useParams();

  return (
    <>
      <Confetti
        width={width}
        height={1300}
        numberOfPieces={100}
        initialVelocityX={6}
        colors={['#ffffff', '#FFF500', '#05FF00', '#0500FF', '#f00']}
      />
      <InvokeContainer>
        <H3 style={{ marginBottom: '3rem' }}>Hail the Spirits</H3>
        <DataSm style={{ marginBottom: '3rem' }}>
          You summoned your organization!
        </DataSm>

        <ButtonContainer>
          <Button color='secondary' fullWidth>
            <LinkButton
              showExternalIcon={false}
              href={`https://admin.daohaus.club/#/molochv3/${
                import.meta.env.VITE_TARGET_CHAIN
              }/${daoId}/`}
            >
              View DAO
            </LinkButton>
          </Button>
          <Button color='secondary' fullWidth>
            <LinkButton
              showExternalIcon={false}
              href='https://docs.daohaus.club/'
            >
              Read Docs
            </LinkButton>
          </Button>
          <Button color='secondary' fullWidth>
            <LinkButton
              showExternalIcon={false}
              href='https://bootleggers.wtf/'
            >
              Customize Interface
            </LinkButton>
          </Button>
        </ButtonContainer>
      </InvokeContainer>
    </>
  );
};

export default Success;
