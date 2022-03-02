import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function Card() {
  let views = '100k';
  let price = '16.00';

  return (
    <StyledCard>
      <ViewCount>{views} Page Views</ViewCount>
      <Bar></Bar>
      <Price>£{price} /month</Price>
      <BillingRow>
        <p>Monthly Billing</p>
        <div>Tog</div>
        <p>Yearly Billing</p>
        <p>25%</p>
      </BillingRow>
      <ul>
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <button>Start my trial</button>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.cardBg};
`;

const ViewCount = styled.p`
  margin-top: 3.5rem;
  text-transform: uppercase;
`;

const Bar = styled.div`
  margin-top: 4rem;
  width: 85%;
  height: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.sliderEmpty}; ;
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
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
