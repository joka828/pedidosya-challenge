import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReadioButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButtonRow = styled.div`
  cursor: pointer;
`;

const RadioButtonList = ({ options, onChange, value }) => (
  <ReadioButtonsWrapper>
    {options.map(option => (
      <RadioButtonRow key={option.value} onClick={() => onChange(option.value)}>
        <input
          type="radio"
          checked={value === option.value}
        />
        {option.label}
      </RadioButtonRow>
    ))}
  </ReadioButtonsWrapper>
);

RadioButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioButtonList.defaultProps = {
  value: null,
};


export default RadioButtonList;
