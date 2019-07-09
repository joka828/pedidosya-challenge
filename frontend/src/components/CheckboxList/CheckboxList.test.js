import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import CheckboxList from './CheckboxList';

describe('<CheckboxList />', () => {
  const mockProps = {
    options: [{
      value: 'testingCheckboxList',
      label: 'testingCheckboxList',
    }, {
      value: 'checked',
      label: 'testingCheckboxList',
    }],
    value: ['checked'],
    onChange: () => {},
  };

  const list = mount((
    <CheckboxList {...mockProps} />
  ));

  it('renders correctly', () => expect(list).toMatchSnapshot());
});
