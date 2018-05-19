import React from 'react';
import logo from './logo.png';
import chair from './chair.jpeg';

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
    this.optionSelect = this.optionSelect.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.status !== nextProps.status) {
      return {
        status: nextProps.status
      };
    }

    return null;
  }

  optionSelect() {
    if (this.state.status === 'active') {
      return (
        <div>
          <div>Shipping and pickup options</div>
          <div>Shipping</div>
          <div><img src={logo} />Pickup Free</div>
          <img src={chair} />
          <div>Arrives by</div>
          <div>
            <div>Saturday, May 26</div>
            <div>Free</div>
          </div>
          <div onClick={this.props.inactivateAllForms}>Continue</div>
        </div>
      )
    } else if (this.state.status === 'completed') {
      return <div>completed</div>;
    } else if (this.state.status === 'incomplete') {
      return <div>incomplete</div>;
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
