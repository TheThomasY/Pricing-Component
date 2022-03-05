import React, { useState } from 'react';

// * Components
import Slider from './Slider';
import BillingRow from './BillingRow';

// * Styled Components
import styled from 'styled-components';

// * React Icons
import { TiTick } from 'react-icons/ti';

export default function Card() {
  const [views, setViews] = useState('100K');
  const [price, setPrice] = useState(16);
  const [billing, setBilling] = useState('month');

  const updateViewsAndPrice = ([views, price]) => {
    setViews(views);
    setPrice(price);
  };

  const updateBillingType = () => {
    setBilling((prevBilling) => {
      return prevBilling === 'month' ? 'year' : 'month';
    });
  };

  return (
    <StyledCard>
      <CardTop>
        <ViewCount>{views} Page Views</ViewCount>
        <Slider updateViewsAndPrice={updateViewsAndPrice} />
        <Price>
          <PriceNumber>
            £{billing === 'month' ? price : price / 0.25}.00
          </PriceNumber>{' '}
          /{billing}
        </Price>
        <BillingRow updateBillingType={updateBillingType} />
      </CardTop>
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

const CardTop = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.sliderEmpty};

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ViewCount = styled.p`
  margin-top: 3.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    margin-top: 6rem;
  }
`;

const Price = styled.p`
  margin-top: 5rem;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    grid-row-start: 1;
    grid-column-start: 2;
  }
`;

const PriceNumber = styled.span`
  margin-inline: 1rem;
  color: ${(props) => props.theme.colors.ctaBg};
  font-size: 3.2rem;
  font-weight: 800;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    width: 82%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    justify-content: flex-start;
  }
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

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    margin: 3rem 0;
  }
`;
