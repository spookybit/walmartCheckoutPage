import React from 'react';
import Step1Container from '../step1/step1Container';
import Step2Container from '../step2/step2Container';
import Step3Container from '../step3/step3Container';

class CheckoutForm extends React.Component {
  constructor(){
    super();

    this.state = {
      child1: {active: true, complete: true, address: '742 Evergreen Terrace, Springfield, OR 00000'},
      child2: {active: true, complete: true, shipping: false},
      child3: {active: true, complete: false},
    }
  }

  submitForm(e) {
    let form = e.target.id;

    if (form === 'form1Submit') {
      if (!this.state.child2.complete) {
        let child2State = this.state.child2;
        child2State.active = true;

        this.setState({
          child1 : {active: false, complete: true, address: '742 Evergreen Terrace, Springfield, OR 00000'},
          child2 : child2State
        })
      } else if (this.state.child2.complete) {
        this.setState({
          child1 : {active: false, complete: true, address: '742 Evergreen Terrace, Springfield, OR 00000'},
          child3 : {active: true, complete: false}
        })
      }
    } else if (form === 'form2Submit') {
      let child2State = this.state.child2;
      child2State.active = false;

      this.setState({
        child2 : child2State,
        child3 : {active: true, complete: false}
      })
    }
  }

  shippingUpdate(){
    let status = this.state.child2
    status.shipping = !status.shipping
    this.setState({
      child2: status
    })
  }

  render () {
    return (
      <div>
        <Step1Container shippingUpdate={this.shippingUpdate.bind(this)} submitForm={this.submitForm.bind(this)} status={this.state.child1}/>
        <Step2Container submitForm={this.submitForm.bind(this)}status={this.state.child2} address={this.state.child1.address}/>
        <Step3Container />
      </div>
    )
  }
}

export default CheckoutForm;
