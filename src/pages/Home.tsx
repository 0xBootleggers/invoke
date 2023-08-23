import { Button, H1, H3, SingleColumnLayout, widthQuery } from '@daohaus/ui';
import { RouterLinkButton, UnstyledUiLink } from '../components/Layout';
import styled from 'styled-components';
import { FaqContent } from '../utils/content';
import { Collapser } from '../formWizard';

const BiggerH1 = styled(H1)`
  font-size: 6.4rem;
  @media ${widthQuery.sm} {
    font-size: 4rem;
  }
`;

const ButtonLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1em;
  width: 100%;
  margin-top: 6rem;
`;

const FaqContainer = styled.div`
  margin-top: 15rem;
  text-align: left;
  width: 100%;
`;

const FaqHeader = styled.div`
  width: 100%;
  text-align: center;
`;

const Headlines = styled.div`
  .layerOne {
    margin-top: 3rem;
    @media ${widthQuery.sm} {
      margin-top: 5.15rem;
    }
  }
  .layerTwo {
    position: absolute;
    top: 17rem;
    margin-right: 2.75rem;
    max-width: 1100px;
    @media ${widthQuery.sm} {
      top: 16.5rem;
    }
  }
  .layerThree {
    position: absolute;
    top: 16rem;
    margin-right: 2.75rem;
    max-width: 1100px;
    @media ${widthQuery.sm} {
      top: 16rem;
    }
  }
  .layerFour {
    position: absolute;
    top: 15rem;
    margin-right: 2.75rem;
    max-width: 1100px;
    @media ${widthQuery.sm} {
      top: 15.5rem;
    }
  }
  .layerFive {
    position: absolute;
    top: 14rem;
    margin-right: 2.75rem;
    max-width: 1100px;
    @media ${widthQuery.sm} {
      top: 15rem;
    }
  }
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <Headlines>
        <div className='layerOne'>
          <BiggerH1 color='#ffffff'>
            A purpose-driven governance stack for your Arbitrum community.
          </BiggerH1>
        </div>
        <div className='layerTwo'>
          <BiggerH1 color='#FFF500'>
            A purpose-driven governance stack for your Arbitrum community.
          </BiggerH1>
        </div>
        <div className='layerThree'>
          <BiggerH1 color='#05FF00'>
            A purpose-driven governance stack for your Arbitrum community.
          </BiggerH1>
        </div>
        <div className='layerFour'>
          <BiggerH1 color='#0500FF'>
            A purpose-driven governance stack for your Arbitrum community.
          </BiggerH1>
        </div>
        <div className='layerFive'>
          <BiggerH1 color='#f00'>
            A purpose-driven governance stack for your Arbitrum community.
          </BiggerH1>
        </div>
      </Headlines>
      <ButtonLinks>
        <Button color='primary'>
          <RouterLinkButton to='/invoke'>Create</RouterLinkButton>
        </Button>
        <Button color='secondary'>
          <UnstyledUiLink
            href='https://docs.daohaus.club/'
            showExternalIcon={false}
          >
            Docs
          </UnstyledUiLink>
        </Button>
      </ButtonLinks>

      <FaqContainer>
        <FaqHeader>
          <H3>FAQs</H3>
        </FaqHeader>
        {FaqContent.map(faq => {
          return (
            <Collapser
              title={faq.title}
              content={faq.content}
              key={faq.title}
            />
          );
        })}
      </FaqContainer>
    </SingleColumnLayout>
  );
};
