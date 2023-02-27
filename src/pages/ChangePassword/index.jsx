import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';

const mapDispatchToProps = dispatch => ({
  changePassword: values => {
    dispatch({
      type: 'CHANGE_REQUEST',
      payload: values,
      meta: {
        loadingId: -1,
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(ChangePassword);
