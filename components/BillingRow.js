import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function BillingRow(props) {
  const updateBilling = () => {
    props.updateBillingType();
  };

  return (
    <StyledBillingRow>
      <p>Monthly Billing</p>
      <CheckBoxWrapper>
        <CheckBox onChange={updateBilling} id='checkbox' type='checkbox' />
        <CheckBoxLabel htmlFor='checkbox' />
      </CheckBoxWrapper>
      <YearlyBilling>Yearly Billing</YearlyBilling>
    </StyledBillingRow>
  );
}

const StyledBillingRow = styled.div`
  width: 90%;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    grid-column: span 2;
    margin-top: 7rem;
    gap: 1.5rem;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0.3rem;
  left: 0;
  width: 4.2rem;
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
      margin-left: 2.4rem;
      transition: 0.2s;
    }
  }
`;

const YearlyBilling = styled.p`
  position: relative;

  &::after {
    content: '-25%';
    position: absolute;
    top: 0;
    left: 105%;
    width: 4rem;
    height: 2rem;
    padding: 0.1rem 0.6rem;
    border-radius: 1.5rem;
    color: ${({ theme }) => theme.colors.discountText};
    background-color: ${({ theme }) => theme.colors.discountBg};
  }

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    &::after {
      content: '-25% discount';
      width: 10rem;
    }
  }
`;

const Discount = styled.p`
  position: absolute;
  left: 105%;
  top: 0;
  transform: translateY(-10%);
  padding: 0.2rem 0.75rem;
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colors.discountText};
  background-color: ${({ theme }) => theme.colors.discountBg}; ;
`;
