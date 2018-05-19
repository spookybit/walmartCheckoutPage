import React from 'react';
import Step1Container from '../step1/step1Container';
// import Step2Container from '../step2/step2Container';
// import Step3Container from '../step3/step3Container';

class CheckoutForm extends React.Component {
  constructor(){
    super();

    this.state = {
      child1: 'active',
      child2: 'active',
      child3: 'active',
    }
  }

  inactivateAllForms () {
    this.setState(
      {
        child1: 'incomplete',
        child2: 'incomplete',
        child3: 'incomplete',
      }
    )
  }

  render () {
    return (
      <div>
        <Step1Container inactivateAllForms={this.inactivateAllForms.bind(this)} status={this.state.child1}/>
      </div>
    )
  }
}

export default CheckoutForm;
