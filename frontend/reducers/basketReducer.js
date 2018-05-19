import {merge} from 'lodash';

const chair = {
  name: 'Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red',
  cost: 93,
  pickupCost: 0,
  tax: .1,
  quantity: 1,
  discount: false
}

const BasketReducer = (state = chair, action) => {
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
}

export default BasketReducer;
