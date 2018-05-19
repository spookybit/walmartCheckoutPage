import React from 'react';

class PickupForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.formNumber}</div>
        <div>{this.props.formHeading}</div>
        <div>*required field</div>

        <div>
          <div>
            <div>First name of photo ID*</div>
            <input />
          </div>
          <div>
            <div>Last name of photo ID*</div>
            <input />
          </div>
          <div>
            <div>Email address for order notification*</div>
            <input />
          </div>
          <div>
            <div>Mobile number for notification (optional)</div>
            <input />
          </div>
        </div>

        <div>
          <div>Alternate pickup person (optional)</div>
          <div>
            <div>First name on photo ID</div>
            <input />
          </div>
          <div>
            <div>Last name on photo ID</div>
            <input />
          </div>
          <div>
            <div>Email address for order notification (optional)</div>
            <input />
          </div>
          <div>Remove</div>
        </div>

        <div>
          <div>We'll notify you when your items are ready and hold them for one week at this store.</div>
          <div>Store</div>
          <div>{this.props.address}</div>
        </div>

        <div>Submit</div>
      </div>
    )
  }
}

export default PickupForm;
