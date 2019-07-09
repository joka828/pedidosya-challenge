import React from 'react';
import styled from 'styled-components';

import ShopsList from './containers/ShopsList';

import { ShopsListContext } from './state/shopsList/hook';
import { FiltersContext } from './state/filters/hook';

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const App = () => (
  <FiltersContext>
    <ShopsListContext>
      <StyledApp>
        <ShopsList />
      </StyledApp>
    </ShopsListContext>
  </FiltersContext>
);

export default App;
