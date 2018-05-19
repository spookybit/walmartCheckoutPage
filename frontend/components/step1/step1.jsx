import React from 'react';
import logo from './logo.png';
import chair from './chair.jpeg';
import FormIncomplete from '../forms/formIncomplete';
import FormComplete from '../forms/formComplete';

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.status.active,
      complete: this.props.status.complete,
      deliveryType: 'shipping',
      address: '742 Evergreen Terrace, Springfield, OR 00000'
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
      this.setState({
        deliveryType: deliveryType
      }, this.props.shippingUpdate())
    }
  }

  optionSelect() {
    if (this.state.active) {
      if (this.state.deliveryType === 'shipping') {
        return (
          <div>
            <div>Shipping and pickup options</div>
            <div id='shipping' onClick={this.switchDelivery.bind(this)}>Shipping</div>
            <div id='pickup' onClick={this.switchDelivery.bind(this)}><img src={logo} />Pickup Free</div>
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
        return (
          <div>
            <div>Shipping and pickup options</div>
            <div id='shipping' onClick={this.switchDelivery.bind(this)}>Shipping</div>
            <div id='pickup' onClick={this.switchDelivery.bind(this)}><img src={logo} />Pickup Free</div>
            <div>Store:
              <div>{this.state.address}</div>
              <div>Edit</div>
            </div>
            <div>We'll hold your items for 7 days.</div>
            <div>Pick up Tue, Dec 25</div>
            <img src={chair} />
            <div id='form1Submit' onClick={this.props.submitForm}>Continue</div>
          </div>
        )
      }
    } else if (!this.state.active) {
      if (this.state.complete) {
        return <FormComplete formNumber='1' formHeading='Shipping' formDetails={
            {img: chair,
            arrival: 'Dec 25, 2018'}
          }/>
      } else {
        return <FormIncomplete formNumber='1' formHeading='Shipping and pickup options' />
      }
    }
  }

  render() {
    return (
      <div>
        {this.optionSelect()}
      </div>
    )
  }
}

export default Step1;
