const DeliveryReducer = (state = {'delivery': 'shipping'}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default DeliveryReducer;
