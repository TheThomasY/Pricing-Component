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
      <p>Yearly Billing</p>
      <Discount>-25%</Discount>
    </StyledBillingRow>
  );
}

const StyledBillingRow = styled.div`
  width: 90%;
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.sliderEmpty};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
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

const Discount = styled.p`
  padding: 0.2rem 0.75rem;
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.colors.discountText};
  background-color: ${({ theme }) => theme.colors.discountBg}; ;
`;
