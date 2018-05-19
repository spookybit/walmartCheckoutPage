import React from 'react';
import FormIncomplete from '../forms/formIncomplete';
import FormComplete from '../forms/formComplete';
import ShippingInfoForm from '../forms/shippingInfoForm';
import PickupForm from '../forms/pickupForm';

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.status.active,
      complete: this.props.status.complete,
      shipping: this.props.status.shipping,
      address: this.props.address
    }
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

  optionSelect() {
    if (this.state.active) {
      if (this.state.shipping) {
        return (
          <ShippingInfoForm formNumber='2' formHeading='Enter shipping address'/>
        )
      } else {
        return (
          <PickupForm formNumber='2' formHeading='Enter pickup person' address={this.state.address}/>
        )
      }
    } else if (!this.state.active) {
      if (this.state.complete) {
        if (this.state.shipping) {
          let address = this.state.address
          return <FormComplete formNumber='2' formHeading='Send to' formDetails={
              {
                name: 'Bart Simpson',
                address: address
              }
            }/>
        } else {
          let address = this.state.address
          return <FormComplete formNumber='2' formHeading='Send to' formDetails={
              {
                name: 'Bart Simpson',
                email: 'bartMan@springfieldElementary.edu',
                address: address
              }
            }/>
        }
      } else {
        return <FormIncomplete formNumber='2' formHeading='Enter shipping address' />
      }
    }
  }

  renderAddresses() {

  }

  render () {
    return (
      <div>{this.optionSelect()}</div>
    )
  }
}

export default Step2;
