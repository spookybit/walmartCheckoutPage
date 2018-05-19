import {merge} from 'lodash';

const BasketReducer = (state = [{name: 'chair', cost: '$1', description: "it's a chair..."}], action) => {
  Object.freeze(state);
  switch(action.type){
    default:
      return state;
  }
}

export default BasketReducer;
