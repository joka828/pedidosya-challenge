import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const ItemLayout = styled.div`
  display: flex;
  margin-bottom: 6px;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Border = styled.div`
  background-color: #F52F4180;
  height: 6px;
  border-radius: 3px;
  width: 100%;
`;

const StyledImg = styled.img`
  padding: 8px;
`;

const Title = styled.span`
  font-size: 24px;
  color: #F52F41;
`;

const Rating = styled.div`
  span {
    margin-left: 4px;
    font-size: 12px;
  }
`;

const Item = ({ shop, last }) => (
  <ItemLayout key={shop.name}>
    <ItemWrapper>
      <StyledImg src={shop.logoUrl} alt={shop.logo} />
      <Description>
        <Title key="title">{shop.name}</Title>
        <Rating>
          <StarRatings
            key="stars"
            rating={parseFloat(shop.ratingScore)}
            starRatedColor="#F52F4180"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
          />
          <span>{shop.ratingScore}</span>
        </Rating>
        <span key="delivery">{`Delivery: ${shop.deliveryTime}`}</span>
      </Description>
    </ItemWrapper>
    {last ? null : <Border />}
  </ItemLayout>
);

Item.propTypes = {
  shop: PropTypes.shape({
    name: PropTypes.string,
    logoUrl: PropTypes.string,
    ratingScore: PropTypes.string,
    deliveryTime: PropTypes.string,
  }).isRequired,
  last: PropTypes.bool,
};

Item.defaultProps = {
  last: false,
};

export default Item;
