import React, { useContext } from 'react';
import styled from 'styled-components';
import { withLDConsumer } from 'ldclient-react';
import context from './context';

const ProductTileRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 20px 50px;
`;

const Heading = styled.h2`
  color: #ffdd03;
`;

const AddToCartButton = styled.button`
  font-size: 14px;
  border-radius: 36px;
  background: #25861e;
  border-color: #25861e;
  color: white;
  width: 40%;
  height: 40px;
`;

const ProductTile = ({ ldClient, heading, image, productName, productId, price }) => {
  const { cart, updateCart, user } = useContext(context);

  const addToCart = () => {
    let totalCartValue = price;
    cart.forEach(c => (totalCartValue += c.price));
    user.custom.totalCartValue = totalCartValue;
    ldClient.identify(user);
    updateCart(cart.concat([{ productId, productName, price }]));
  };

  return (
    <ProductTileRoot>
      <Heading>{heading}</Heading>
      <img src={image} />
      <h3>{productName}</h3>
      <h3>${price}</h3>
      <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
    </ProductTileRoot>
  );
};

export default withLDConsumer()(ProductTile);
