import React from 'react';
import logo from './logo.png';

class Header extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <img src={logo}></img>
        <div>Checkout</div>
        <img src={logo}></img>
      </div>
    )
  }
}

export default Header;
