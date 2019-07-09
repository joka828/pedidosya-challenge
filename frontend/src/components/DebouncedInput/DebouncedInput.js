import React, { useCallback } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid #F52F4180;
  border-radius: 8px;
`;

const DebouncedInput = ({
  onDebouncedChange, onChange, value, ...props
}) => {
  const debouncedChange = useCallback(debounce(onDebouncedChange || (() => {}), 1500), []);

  const onInputChange = (e) => {
    const { value: newValue } = e.target;
    if (onChange) onChange(newValue);
    if (debouncedChange) debouncedChange(newValue);
  };
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onInputChange}
      placeholder="Buscar..."
      {...props}
    />
  );
};

DebouncedInput.propTypes = {
  onDebouncedChange: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

DebouncedInput.defaultProps = {
  onDebouncedChange: null,
  onChange: null,
  value: '',
};


export default DebouncedInput;
