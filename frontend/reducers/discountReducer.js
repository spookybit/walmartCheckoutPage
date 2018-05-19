const DiscountReducer = (state = {'discount': false}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}

export default DiscountReducer;
