import React from 'react';
import styled from 'styled-components';

import { filtersDictionary } from '../../constants';
import useFilters from '../../state/filters/hook';

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #F52F4180;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const Filters = () => {
  const [filtersData, filtersActions] = useFilters();
  return (
    <React.Fragment>
      {filtersData.state.map((filter) => {
        const FilterComponent = filtersDictionary[filter.type];
        if (!FilterComponent) return <FilterWrapper>{`Filter ${filter.name} not found`}</FilterWrapper>;
        return (
          <FilterWrapper key={filter.name}>
            <FilterComponent
              onChange={newValue => filtersActions.setState({ name: filter.name, value: newValue })}
              value={filter.value}
              options={filter.config}
            />
          </FilterWrapper>
        );
      })}
    </React.Fragment>
  );
};


export default Filters;
