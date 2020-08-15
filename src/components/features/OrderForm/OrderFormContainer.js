import {connect} from 'react-redux';
import {getOrderOptions} from '../../../redux/orderRedux';
import Trip from '../../views/Trip/Trip';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(Trip);