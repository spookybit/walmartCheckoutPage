import React from 'react';

class Step3 extends React.Component {
  constructor() {
    super()

    this.state = {
      active: this.props.status.active,
      complete: this.props.status.complete,
      payment: 'credit card'
    }
  }

  optionSelect() {
    
  }

  render() {
    return(
      <div>
        {this.optionSelect()}
      </div>
    )
  }
}

export default Step3;
