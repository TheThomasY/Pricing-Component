import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function BillingRow() {
  return (
    <StyledBillingRow>
      <p>Monthly Billing</p>
      <CheckBoxWrapper>
        <CheckBox id='checkbox' type='checkbox' />
        <CheckBoxLabel htmlFor='checkbox' />
      </CheckBoxWrapper>
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
  align-items: center;
  gap: 1rem;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0.3rem;
  left: 0;
  width: 4.4rem;
  height: 2.2rem;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.toggleBg};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
    margin: 4px;
    background: #ffffff;
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 4.4rem;
  height: 2.2rem;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.sliderBar};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1.4rem;
      height: 1.4rem;
      margin-left: 2.7rem;
      transition: 0.2s;
    }
  }
`;
