import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function BillingRow() {
  return (
    <StyledBillingRow>
      <p>Monthly Billing</p>
      <div>Tog</div>
      <p>Yearly Billing</p>
      <p>25%</p>
    </StyledBillingRow>
  );
}

const StyledBillingRow = styled.div`
  width: 80%;
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.sliderEmpty};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
