import React from 'react';
import Header from '../header/header';
import CheckoutForm from '../forms/checkoutForm';

class CheckoutPage extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <Header />
        <CheckoutForm />
      </div>
    )
  }
}

export default CheckoutPage;
