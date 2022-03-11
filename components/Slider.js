import React, { useState } from 'react';

// * Styled Components
import styled from 'styled-components';

// * React Slider
import ReactSlider from 'react-slider';

export default function Slider(props) {
  const viewsAndPrice = {
    1: ['10K', 8],
    2: ['50K', 12],
    3: ['100K', 16],
    4: ['500K', 24],
    5: ['1M', 36],
  };

  const sliderChangeHandler = (value) => {
    props.updateViewsAndPrice(viewsAndPrice[value]);
  };

  return (
    <Bar>
      <StyledSlider
        min={1}
        max={5}
        defaultValue={3}
        renderTrack={(props, state) => (
          <StyledTrack {...props} index={state.index} />
        )}
        renderThumb={(props) => <StyledThumb {...props}></StyledThumb>}
        onChange={(value) => sliderChangeHandler(value)}
      />
    </Bar>
  );
}

const Bar = styled.div`
  margin-top: 3rem;
  width: 85%;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    grid-column: span 2;
    margin-top: 3.5rem;
  }
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 1rem;
`;

const StyledThumb = styled.div`
  border: 2rem solid hsl(174, 86%, 45%);
  border-radius: 100%;
  outline: none;
  cursor: grab;
  display: block;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
  box-shadow: 0px 8px 15px 10px #b7fdf6;

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: -6px;
    left: 5px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #7bfdf3;
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    bottom: -6px;
    left: -10px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #7bfdf3;
  }
`;

const StyledTrack = styled.div`
  top: 1.5rem;
  height: 1rem;
  background: ${(props) =>
    props.index === 1 ? 'hsl(224, 65%, 95%)' : 'hsl(174, 77%, 80%)'};
  border-radius: 999px;
`;
