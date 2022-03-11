import React from 'react';

// * Styled Components
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <Title>Simple, traffic-based pricing</Title>
      <Para>Sign-up for our 30-day trial. No credit card required. </Para>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-top: 9rem;
  text-align: center;
  transform-style: preserve-3d;

  &::before {
    content: '';
    width: 125px;
    height: 125px;
    position: absolute;
    top: -10px;
    left: 28%;
    border: 1px solid #d5dbe9;
    border-radius: 50%;
    z-index: 0;
    transform: translateZ(-1px);
  }
  &::after {
    content: '';
    width: 80px;
    height: 80px;
    position: absolute;
    top: -30px;
    border: 1px solid #d5dbe9;
    border-radius: 50%;
    transform: translateZ(-1px);
  }

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    &::before {
      left: 35%;
    }
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.ctaBg};

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    font-size: 2.8rem;
  }
`;

const Para = styled.p`
  width: 60%;
  margin-top: 1rem;
  margin-inline: auto;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    width: auto;
  }
`;
