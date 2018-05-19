import React from 'react';
import logo from './logo.png';
import chair from './chair.jpeg';

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.status.active,
      complete: this.props.status.complete,
      deliveryType: 'shipping'
    }
    this.optionSelect = this.optionSelect.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.active !== nextProps.status.active || prevState.complete !== nextProps.status.complete) {
      return {
        active: nextProps.status.active,
        complete: nextProps.status.complete
      };
    }

    return null;
  }

  switchDelivery(e) {
    let deliveryType = e.target.id;

    if (this.state.deliveryType !== deliveryType) {
      this.setState = {
        deliveryType: deliveryType
      }
    }
  }

  submitForm() {
    // this.props.setShipping(this.state.deliveryType);
    // this.props.submitForm();
  }

  optionSelect() {
    if (this.state.active) {
      if (this.state.deliveryType === 'shipping') {
        return (
          <div>
            <img src={chair} />
            <div>Arrives by</div>
            <div>
              <div>Saturday, May 26</div>
              <div>Free</div>
            </div>
            <div id='form1Submit' onClick={this.props.submitForm}>Continue</div>
          </div>
        )
      } else if (this.state.deliveryType === 'pickup') {

      }
    } else if (!this.state.active) {
      return <div>inactive</div>;
    }
  }

  render() {
    return (
      <div>
        <div>Shipping and pickup options</div>
        <div id='shipping' onClick={this.switchDelivery.bind(this)}>Shipping</div>
        <div id='pickup' onClick={this.switchDelivery.bind(this)}><img src={logo} />Pickup Free</div>
        {this.optionSelect()}
      </div>
    )
  }
}

export default Step1;
