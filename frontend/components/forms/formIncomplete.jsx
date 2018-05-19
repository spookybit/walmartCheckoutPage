import React from 'react';

class FormIncomplete extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div><div>{this.props.formNumber}</div>{this.props.formHeading}</div>
    )
  }
}

export default FormIncomplete;
