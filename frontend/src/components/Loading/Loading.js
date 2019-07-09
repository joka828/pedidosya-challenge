import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const StyledLoading = styled(ReactLoading)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Loading = () => (
  <StyledLoading type="spinningBubbles" color="#F52F41" />
);


export default Loading;
