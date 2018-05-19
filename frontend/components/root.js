import React from 'react';
import {Provider} from 'react-redux';
import CheckoutPage from './checkoutPage/checkoutPage';

const Root = ({Store}) => (
  <Provider store={Store}>
    <CheckoutPage/>
  </Provider>

);

export default Root;
