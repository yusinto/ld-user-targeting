import React from 'react';
import { withLDConsumer } from 'ldclient-react';
import styled from 'styled-components';
import ProductTile from './productTile';
import ferrero from '../../assets/ferrero.jpg';
import hotCrossBuns from '../../assets/hotCrossBuns.jpg';
import hams from '../../assets/hams.jpg';
import chocolates from '../../assets/chocolates.jpg';

const ProductsRoot = styled.div`
  display: flex;
`;

const Specials = withLDConsumer()(({ flags }) => {
  const props = { heading: 'Easter Special' };
  switch (flags.easterSpecials) {
    case 'easter chocolates':
      props.image = chocolates;
      props.productId = 'easter special chocolates';
      props.productName = 'Cadbury Party Pack';
      props.price = 5;
      break;
    case 'easter ham':
      props.image = hams;
      props.productId = 'easter special hams';
      props.productName = 'Yummy Ham';
      props.price = 35;
      break;
    case 'easter hot cross buns':
      props.image = hotCrossBuns;
      props.productId = 'easter special buns';
      props.productName = `Wendy's Hot X Buns`;
      props.price = 6;
      break;
    default:
      props.heading = 'No specials';
      break;
  }

  if (props.heading === 'No specials') return '';
  return <ProductTile {...props} />;
});

const Products = () => {
  return (
    <ProductsRoot>
      <ProductTile image={ferrero} productName="Ferrero Rocher Chocolates" price={19} />
      <Specials />
    </ProductsRoot>
  );
};

export default Products;
