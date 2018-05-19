import {connect} from 'react-redux';
import Step1 from './step1';
import {setShipping} from './step1Actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  setShipping: (deliveryType) => dispatch(setShipping(deliveryType))
});

export default connect (null, mapDispatchToProps)(Step1);
