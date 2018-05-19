import {merge} from 'lodash';

const defaultCheckoutInfo = {
  delivery: {
    name: '',
    address: '',
    shippingCost: 0
  },
  pickup: {
    storeID: 1,
    pickupPersons: [
      {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      }
    ]
  },
  payment: {
    creditCard: {
      firstName: '',
      lastName: '',
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
      phonenumber: '',
      streetAddress: '',
      apt: '',
      city: '',
      state: '',
      zip: ''
    },
    giftCard: {
      giftCardNum: '',
      PIN: ''
    }
  }
}

const CheckoutReducer = (state = defaultCheckoutInfo, action) => {
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
}

export default CheckoutReducer;
