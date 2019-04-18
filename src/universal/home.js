import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { withLDConsumer } from 'ldclient-react';
import pluralize from 'pluralize';
import Products from './products';
import Context from './context';

const Root = styled.div`
  color: #001b44;
`;
const Heading = styled.h1`
  color: #00449e;
`;

const user = { key: 'yus', firstName: 'Yus', custom: { location: 'sydney', totalCartValue: 0 } };

const Home = ({ flags, ldClient }) => {
  const [location, setLocation] = useState('unknown');
  const [cart, setCart] = useState([]);

  const login = () => {
    setLocation('sydney');
    ldClient.identify(user);
  };

  const onChangeLocation = ({ target: { value } }) => {
    user.custom.location = value;
    setLocation(user.custom.location);
    ldClient.identify(user);
  };

  let totalCartValue = 0;
  cart.forEach(c => (totalCartValue += c.price));

  return (
    <Context.Provider value={{ cart, updateCart: setCart, user }}>
      <Root>
        <Heading>Welcome {location !== 'unknown' ? user.firstName : 'to ShopX'}</Heading>
        <div>
          {location !== 'unknown' ? (
            <div>
              <p>
                You are in:{' '}
                <select defaultValue={location} t="" placeholder="change location" onChange={onChangeLocation}>
                  <option value="brisbane">Brisbane</option>
                  <option value="melbourne">Melbourne</option>
                  <option value="perth">Perth</option>
                  <option value="sydney">Sydney</option>
                </select>
              </p>
              {cart.length > 0 ? (
                <p>
                  You have {cart.length} {pluralize('items', cart.length)} worth ${totalCartValue} in your cart.
                </p>
              ) : null}
              {flags.easterITunesSpecial ? <h4>Yay! You get a free $10 itunes voucher!</h4> : null}
              <Products />
            </div>
          ) : (
            <button
              css={`
                font-size: 17px;
                border-radius: 36px;
                background: #25861e;
                border-color: #25861e;
                color: white;
                width: 120px;
                height: 40px;
              `}
              onClick={login}
            >
              Login
            </button>
          )}
        </div>
      </Root>
    </Context.Provider>
  );
};
Home.propTypes = {
  flags: PropTypes.object.isRequired,
};

export default withLDConsumer()(Home);
