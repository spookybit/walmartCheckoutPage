import {connect} from 'react-redux';
import Step2 from './step2';

const mapStateToProps = ({shippingAddresses}) => ({
  shippingAddresses: shippingAddresses
});

const mapDispatchToProps = dispatch => ({

})

export default connect (null, null)(Step2);
