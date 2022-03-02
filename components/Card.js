import React from 'react';

// * Components
import Slider from './Slider';

// * Styled Components
import styled from 'styled-components';

// * React Icons
import { TiTick } from 'react-icons/ti';

export default function Card() {
  let views = '100k';
  let price = '16.00';

  return (
    <StyledCard>
      <ViewCount>{views} Page Views</ViewCount>
      <Slider />
      <Price>£{price} /month</Price>
      <BillingRow>
        <p>Monthly Billing</p>
        <div>Tog</div>
        <p>Yearly Billing</p>
        <p>25%</p>
      </BillingRow>
      <CardBottom>
        <ul>
          <ListItem>
            <TiTick color={'#1aceb8'} />
            <p>Unlimited websites</p>
          </ListItem>
          <ListItem>
            <TiTick color={'#1aceb8'} />
            <p>100% data ownership</p>
          </ListItem>
          <ListItem>
            <TiTick color={'#1aceb8'} />
            <p>Email reports</p>
          </ListItem>
        </ul>
        <CTA>Start my trial</CTA>
      </CardBottom>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  font-size: 1.3rem;

  background-color: ${(props) => props.theme.colors.cardBg};
`;

const ViewCount = styled.p`
  margin-top: 3.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const Price = styled.p`
  margin-top: 4rem;
`;

const BillingRow = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-right: 1rem;
  padding-bottom: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.sliderEmpty};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CTA = styled.button`
  margin-top: 2.5rem;
  padding: 1.5rem 4.5rem;
  border: none;
  border-radius: 2rem;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.ctaText};
  background-color: ${({ theme }) => theme.colors.ctaBg};
  cursor: pointer;
`;
