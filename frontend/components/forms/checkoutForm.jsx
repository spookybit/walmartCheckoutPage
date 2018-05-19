import React from 'react';
import Step1Container from '../step1/step1Container';
// import Step2Container from '../step2/step2Container';
// import Step3Container from '../step3/step3Container';

class CheckoutForm extends React.Component {
  constructor(){
    super();

    this.state = {
      child1: {active: false, complete: true},
      child2: {active: false, complete: false},
      child3: {active: false, complete: false},
    }
  }

  submitForm(e) {
    let form = e.target.id;

    if (form === 'form1Submit') {
      if (!this.state.child2.complete) {
        this.setState = {
          child1 : {active: false, complete: true},
          child2 : {active: true, complete: false}
        }
      } else if (this.state.child2.complete) {
        this.setState = {
          child1 : {active: false, complete: true},
          child3 : {active: true, complete: false}
        }
      }
    } else if (form === 'form2Submit') {
      this.setState = {
        child2 : {active: false, complete: true},
        child3 : {active: true, complete: false}
      }
    }
  }

  render () {
    return (
      <div>
        <Step1Container submitForm={this.submitForm.bind(this)}status={this.state.child1}/>
      </div>
    )
  }
}

export default CheckoutForm;
