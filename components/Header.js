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
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Para = styled.p`
  width: 60%;
  margin-top: 1rem;
  margin-inline: auto;
`;
