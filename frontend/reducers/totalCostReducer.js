import {merge} from 'lodash';

const TotalCostReducer = (state = {totalCost: 0}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
}
export default TotalCostReducer;
