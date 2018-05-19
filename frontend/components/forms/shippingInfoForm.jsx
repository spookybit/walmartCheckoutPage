import React from 'react';

class ShippingInfoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>{this.props.formNumber}</div>
        <div>{this.props.formHeading}</div>
        <div>*required field</div>
        <div>
          <div>First name*</div>
          <input />
        </div>
        <div>
          <div>Last Name</div>
          <input />
        </div>
        <div>
          <div>Phone number*(Ex: (202) 555-0115)</div>
          <input />
        </div>
        <div>
          <div>Street address*</div>
          <input />
        </div>
        <div>
          <div>Apt, suite, etc (optional)</div>
          <input />
        </div>
        <div>
          <div>City</div>
          <input />
        </div>
        <div>
          <div>State</div>
          <input />
        </div>
        <div>
          <div>ZIP Code*</div>
          <input />
        </div>
        <label><input type='checkbox'/>Set as my preferred address</label>
      </div>
    )
  }
}

export default ShippingInfoForm;
