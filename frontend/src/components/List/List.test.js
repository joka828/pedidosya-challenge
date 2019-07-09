import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import List from './List';
import ListItem from './ListItem';

describe('<List />', () => {
  const children = 'testing list';
  const list = mount((
    <List>
      {children}
    </List>
  ));

  it('renders correctly', () => expect(list).toMatchSnapshot());
});

describe('<ListItem />', () => {
  const mockShop = {
    name: 'testing ListItem',
    logoUrl: 'testing ListItem',
    ratingScore: '2.5',
    deliveryTime: 'testing ListItem',
  };
  const list = mount((
    <List>
      <ListItem shop={mockShop} />
      <ListItem shop={mockShop} last />
    </List>
  ));

  it('renders correctly', () => expect(list).toMatchSnapshot());
});
