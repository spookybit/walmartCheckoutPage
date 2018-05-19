import {combineReducers} from 'redux';
import TotalCostReducer from './totalCostReducer';
import BasketReducer from './basketReducer';
import DiscountReducer from './discountReducer';
import DeliveryReducer  from './deliveryReducer';

const rootReducer = combineReducers({
  totalCost: TotalCostReducer,
  basket: BasketReducer,
  discount: DiscountReducer,
  delivery: DeliveryReducer
});

export default rootReducer;
