import React, { useState } from 'react';

// * Styled Components
import styled from 'styled-components';

// * React Slider
import ReactSlider from 'react-slider';

export default function Slider(props) {
  const sliderChangeHandler = (value, index) => {
    props.updateViews(value);
  };

  return (
    <Bar>
      <StyledSlider
        min={10}
        max={1000}
        defaultValue={100}
        renderTrack={(props, state) => (
          <StyledTrack {...props} index={state.index} />
        )}
        renderThumb={(props) => <StyledThumb {...props}></StyledThumb>}
        onChange={(value, index) => sliderChangeHandler(value, index)}
      />
    </Bar>
  );
}

const Bar = styled.div`
  margin-top: 3rem;
  width: 85%;
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
`;

const StyledTrack = styled.div`
  top: 1.5rem;
  height: 1rem;
  background: ${(props) =>
    props.index === 1 ? 'hsl(224, 65%, 95%)' : 'hsl(174, 77%, 80%)'};
  border-radius: 999px;
`;
