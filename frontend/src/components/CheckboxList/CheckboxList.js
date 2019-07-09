import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxRow = styled.div`
  cursor: pointer;
  margin-bottom: 4px;
`;

const CheckboxList = ({ options, onChange, value: values }) => {
  const onCheckboxClick = (value) => {
    if (values.includes(value)) {
      onChange(values.filter(val => val !== value));
    } else {
      onChange(values.concat([value]));
    }
  };

  return (
    <CheckboxesWrapper>
      {options.map(option => (
        <CheckboxRow key={option.value} onClick={() => onCheckboxClick(option.value)}>
          <input type="checkbox" checked={values.includes(option.value)} />
          {option.label}
        </CheckboxRow>
      ))}
    </CheckboxesWrapper>
  );
};

CheckboxList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

CheckboxList.defaultProps = {
  value: [],
};


export default CheckboxList;
