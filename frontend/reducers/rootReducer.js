import {combineReducers} from 'redux';
import TotalCostReducer from './totalCostReducer';
import BasketReducer from './basketReducer';
import DiscountReducer from './discountReducer';
import DeliveryReducer  from './deliveryReducer';
import CheckoutReducer from './checkoutReducer';
import ShippingAddressesReducer from './shippingAddressesReducer';

const rootReducer = combineReducers({
  totalCost: TotalCostReducer,
  basket: BasketReducer,
  discount: DiscountReducer,
  delivery: DeliveryReducer,
  checkout: CheckoutReducer,
  shippingAddresses: ShippingAddressesReducer
});

export default rootReducer;
