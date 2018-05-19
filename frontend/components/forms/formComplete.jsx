import React from 'react';

class FormComplete extends React.Component {
  constructor(props){
    super(props);
  }

  formDetails() {
    const {formDetails} = this.props;

    if (this.props.formNumber === '1') {
      return (
        <div>
          <img src={formDetails.img} />
          <div>{formDetails.arrival}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div>Shipping Address</div>
          <div>{formDetails.name}</div>
          <div>{formDetails.address.street}</div>
          <div>{formDetails.address.city}</div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.formHeading}</div>
        <div>{this.formDetails()}</div>
        <div>Edit</div>
      </div>
    )
  }
}

export default FormComplete;
