import React from 'react';
import {Provider} from 'react-redux';
import CheckoutPage from './checkoutPage/checkoutPage';

const Root = ({store}) => (
  <Provider store={store}>
    <CheckoutPage/>
  </Provider>

);

export default Root;
