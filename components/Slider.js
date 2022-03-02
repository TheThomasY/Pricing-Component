import React from 'react';

// * Styled Components
import styled from 'styled-components';

// * React Slider
import ReactSlider from 'react-slider';

export default function Slider() {
  return (
    <Bar>
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
      />
    </Bar>
  );
}

const Bar = styled.div`
  margin-top: 4rem;
  width: 85%;
`;
