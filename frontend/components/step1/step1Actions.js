export const SET_SHIPPING_SLICE = "SET_SHIPPING_SLICE";

const setShippingAction = (deliveryType) => ({
  type: SET_SHIPPING_SLICE,
  deliveryType
})

export const setShipping = (deliveryType) => dispatch => setShippingAction(deliveryType);
