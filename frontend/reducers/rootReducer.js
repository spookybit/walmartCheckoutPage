import {combineReducers} from 'redux';
import TotalCostReducer from './totalCostReducer';

const rootReducer = combineReducers({
  totalCost: TotalCostReducer
});

export default rootReducer;
