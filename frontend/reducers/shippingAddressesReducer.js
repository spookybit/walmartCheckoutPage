import {merge} from 'lodash';



const ShippingAddressesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default ShippingAddressesReducer;
