import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function Card() {
  return (
    <StyledCard>
      <p>Page Views</p>
      <p>Bar</p>
      <p>£ /month</p>
      <p>Monthly Billing Yearly Billing 25% discount</p>
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
  background-color: ${(props) => props.theme.colors.cardBg};
`;
