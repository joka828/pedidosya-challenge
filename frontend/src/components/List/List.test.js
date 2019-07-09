import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import List from './List';

describe('<List />', () => {
  const children = 'testing list';
  const list = mount((
    <List>
      {children}
    </List>
  ));

  it('renders correctly', () => expect(list).toMatchSnapshot());
});
