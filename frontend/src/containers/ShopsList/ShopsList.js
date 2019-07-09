import React, { useEffect } from 'react';
import styled from 'styled-components';

import Loading from '../../components/Loading/Loading';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';

import Filters from './Filters';

import useShopsList from '../../state/shopsList/hook';
import useFilters from '../../state/filters/hook';

const Layout = styled.div`
  display: flex;
`;

const ListWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
`;

const Sidebar = styled.div`
  width: 20%;
  padding: 32px;
  box-sizing: border-box;
  overflow-y: scroll;
  height: 100vh;
  border-right: 4px solid #F52F4180;
`;

const ShopsList = () => {
  const [shopsListData, shopsListActions] = useShopsList();
  const [filtersData, filtersActions] = useFilters();

  const { shops } = shopsListData;

  useEffect(() => {
    filtersActions.loadConfig();
  }, []);

  useEffect(() => {
    shopsListActions.load(filtersData.state);
  }, [JSON.stringify(filtersData)]);

  return (
    <React.Fragment>
      <Layout>
        <Sidebar>
          <Filters />
        </Sidebar>
        <ListWrapper>
          {shopsListData.loading ? <Loading /> : null}
          <List>
            {shops.map((shop, index) => (
              <ListItem shop={shop} key={shop.name} last={index === (shops.length - 1)} />
            ))}
          </List>
        </ListWrapper>
      </Layout>

    </React.Fragment>
  );
};


export default ShopsList;
